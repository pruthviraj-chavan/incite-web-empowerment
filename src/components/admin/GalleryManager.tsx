import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Edit, Upload, Image as ImageIcon, Images, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string;
  is_active: boolean;
  created_at: string;
}

interface BulkUploadStatus {
  fileName: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

const categories = ['lab', 'hall', 'office', 'reception', 'seminar', 'placement', 'lectures', 'activities', 'advertisements', 'general'];

const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bulkDialogOpen, setBulkDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [bulkCategory, setBulkCategory] = useState('general');
  const [bulkFiles, setBulkFiles] = useState<File[]>([]);
  const [bulkUploadStatus, setBulkUploadStatus] = useState<BulkUploadStatus[]>([]);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    file: null as File | null
  });

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = editingImage?.image_url || '';

      // Upload new image if file is selected
      if (formData.file) {
        const fileExt = formData.file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `gallery/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, formData.file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath);
        
        imageUrl = publicUrl;

        // Delete old image if updating
        if (editingImage?.image_url) {
          const oldPath = editingImage.image_url.split('/').pop();
          if (oldPath) {
            await supabase.storage.from('gallery').remove([`gallery/${oldPath}`]);
          }
        }
      }

      if (editingImage) {
        // Update existing
        const { error } = await supabase
          .from('gallery_images')
          .update({
            title: formData.title,
            description: formData.description,
            category: formData.category,
            image_url: imageUrl
          })
          .eq('id', editingImage.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Image updated successfully!' });
      } else {
        // Create new
        if (!imageUrl) {
          toast({ title: 'Error', description: 'Please select an image', variant: 'destructive' });
          setUploading(false);
          return;
        }

        const { error } = await supabase
          .from('gallery_images')
          .insert({
            title: formData.title,
            description: formData.description,
            category: formData.category,
            image_url: imageUrl
          });

        if (error) throw error;
        toast({ title: 'Success', description: 'Image uploaded successfully!' });
      }

      setDialogOpen(false);
      setEditingImage(null);
      setFormData({ title: '', description: '', category: 'general', file: null });
      fetchImages();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image: GalleryImage) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      // Delete from storage
      const path = image.image_url.split('/gallery/').pop();
      if (path) {
        await supabase.storage.from('gallery').remove([path]);
      }

      // Delete from database
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', image.id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Image deleted successfully!' });
      fetchImages();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const openEditDialog = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      description: image.description || '',
      category: image.category,
      file: null
    });
    setDialogOpen(true);
  };

  const openNewDialog = () => {
    setEditingImage(null);
    setFormData({ title: '', description: '', category: 'general', file: null });
    setDialogOpen(true);
  };

  // Image compression utility
  const compressImage = (file: File, maxWidth = 1920, quality = 0.8): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let { width, height } = img;
          
          // Scale down if larger than maxWidth
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(file); // Fallback to original
            return;
          }
          
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                resolve(file);
              }
            },
            'image/jpeg',
            quality
          );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  // Check for duplicate files
  const checkDuplicates = async (files: File[]): Promise<{ unique: File[], duplicates: string[] }> => {
    const existingNames = new Set(images.map(img => {
      // Extract filename from URL
      const urlParts = img.image_url.split('/');
      return urlParts[urlParts.length - 1]?.split('_').slice(1).join('_') || '';
    }));
    
    const seenNames = new Set<string>();
    const unique: File[] = [];
    const duplicates: string[] = [];
    
    for (const file of files) {
      const normalizedName = file.name.toLowerCase();
      
      // Check if already in current selection or exists in gallery
      if (seenNames.has(normalizedName) || existingNames.has(normalizedName)) {
        duplicates.push(file.name);
      } else {
        seenNames.add(normalizedName);
        unique.push(file);
      }
    }
    
    return { unique, duplicates };
  };

  // Bulk upload handlers
  const handleBulkFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const { unique, duplicates } = await checkDuplicates(filesArray);
      
      if (duplicates.length > 0) {
        toast({
          title: 'Duplicates Removed',
          description: `${duplicates.length} duplicate file(s) were skipped: ${duplicates.slice(0, 3).join(', ')}${duplicates.length > 3 ? '...' : ''}`,
          variant: 'default'
        });
      }
      
      setBulkFiles(unique);
      setBulkUploadStatus(unique.map(f => ({ fileName: f.name, status: 'pending' })));
    }
  };

  const handleBulkUpload = async () => {
    if (bulkFiles.length === 0) {
      toast({ title: 'Error', description: 'Please select files to upload', variant: 'destructive' });
      return;
    }

    setBulkUploading(true);
    setUploadProgress(0);
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < bulkFiles.length; i++) {
      const file = bulkFiles[i];
      
      // Update status to uploading
      setBulkUploadStatus(prev => prev.map((s, idx) => 
        idx === i ? { ...s, status: 'uploading' } : s
      ));

      try {
        // Compress image before upload
        const compressedFile = await compressImage(file, 1920, 0.75);
        
        const fileName = `${Date.now()}_${i}.jpg`;
        const filePath = `gallery/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, compressedFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath);

        // Create database entry - use filename without extension as title
        const title = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, ' ');
        
        const { error: dbError } = await supabase
          .from('gallery_images')
          .insert({
            title: title,
            description: '',
            category: bulkCategory,
            image_url: publicUrl
          });

        if (dbError) throw dbError;

        setBulkUploadStatus(prev => prev.map((s, idx) => 
          idx === i ? { ...s, status: 'success' } : s
        ));
        successCount++;
      } catch (error: any) {
        setBulkUploadStatus(prev => prev.map((s, idx) => 
          idx === i ? { ...s, status: 'error', error: error.message } : s
        ));
        errorCount++;
      }

      setUploadProgress(((i + 1) / bulkFiles.length) * 100);
    }

    setBulkUploading(false);
    toast({ 
      title: 'Bulk Upload Complete', 
      description: `${successCount} uploaded, ${errorCount} failed`,
      variant: errorCount > 0 ? 'destructive' : 'default'
    });

    if (successCount > 0) {
      fetchImages();
    }
  };

  const resetBulkUpload = () => {
    setBulkFiles([]);
    setBulkUploadStatus([]);
    setUploadProgress(0);
    setBulkCategory('general');
  };

  const closeBulkDialog = () => {
    setBulkDialogOpen(false);
    resetBulkUpload();
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="text-xl font-bold text-white">Gallery Images</h2>
        <div className="flex gap-2">
          {/* Bulk Upload Dialog */}
          <Dialog open={bulkDialogOpen} onOpenChange={(open) => { if (!open) closeBulkDialog(); else setBulkDialogOpen(true); }}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                <Images className="w-4 h-4 mr-2" />
                Bulk Upload
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-white/20 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Images className="w-5 h-5 text-purple-400" />
                  Bulk Image Upload
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Category for all images</Label>
                  <Select value={bulkCategory} onValueChange={setBulkCategory} disabled={bulkUploading}>
                    <SelectTrigger className="bg-white/10 border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Select Multiple Images</Label>
                  <Input 
                    type="file" 
                    accept="image/*"
                    multiple
                    onChange={handleBulkFileSelect}
                    className="bg-white/10 border-white/20"
                    disabled={bulkUploading}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Select multiple images at once. Titles will be auto-generated from filenames.
                  </p>
                </div>

                {bulkFiles.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Selected Files ({bulkFiles.length})</Label>
                      {!bulkUploading && (
                        <Button variant="ghost" size="sm" onClick={resetBulkUpload} className="text-gray-400 hover:text-white">
                          Clear All
                        </Button>
                      )}
                    </div>
                    
                    {bulkUploading && (
                      <div className="space-y-2">
                        <Progress value={uploadProgress} className="h-2" />
                        <p className="text-xs text-center text-gray-400">
                          Uploading... {Math.round(uploadProgress)}%
                        </p>
                      </div>
                    )}

                    <div className="max-h-48 overflow-y-auto space-y-1 bg-white/5 rounded-lg p-2">
                      {bulkUploadStatus.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1 px-2 rounded bg-white/5">
                          <span className="text-sm text-gray-300 truncate flex-1">{file.fileName}</span>
                          <div className="ml-2">
                            {file.status === 'pending' && <span className="text-xs text-gray-500">Pending</span>}
                            {file.status === 'uploading' && <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />}
                            {file.status === 'success' && <CheckCircle className="w-4 h-4 text-green-400" />}
                            {file.status === 'error' && (
                              <div className="flex items-center gap-1">
                                <XCircle className="w-4 h-4 text-red-400" />
                                <span className="text-xs text-red-400">{file.error?.slice(0, 20)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleBulkUpload} 
                  disabled={bulkUploading || bulkFiles.length === 0} 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  {bulkUploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload {bulkFiles.length} Images
                    </>
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Single Upload Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openNewDialog} className="bg-gradient-to-r from-blue-500 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-white/20 text-white">
              <DialogHeader>
                <DialogTitle>{editingImage ? 'Edit Image' : 'Add New Image'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="bg-white/10 border-white/20"
                    required
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    value={formData.description} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-white/10 border-white/20"
                  />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select value={formData.category} onValueChange={(v) => setFormData({...formData, category: v})}>
                    <SelectTrigger className="bg-white/10 border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Image {editingImage && '(leave empty to keep current)'}</Label>
                  <Input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-white/10 border-white/20"
                  />
                </div>
                <Button type="submit" disabled={uploading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                  {uploading ? 'Uploading...' : (editingImage ? 'Update' : 'Upload')}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No images uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-white/5 rounded-lg overflow-hidden border border-white/10 group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={image.image_url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" onClick={() => openEditDialog(image)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(image)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-white truncate">{image.title}</h3>
                <p className="text-sm text-gray-400">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
