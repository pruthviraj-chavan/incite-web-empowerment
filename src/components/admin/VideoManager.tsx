import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Edit, Video, Play } from 'lucide-react';

interface GalleryVideo {
  id: string;
  title: string;
  description: string | null;
  youtube_url: string;
  thumbnail_url: string | null;
  category: string;
  is_active: boolean;
  created_at: string;
}

const categories = ['tutorials', 'events', 'testimonials', 'courses', 'general'];

const VideoManager = () => {
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<GalleryVideo | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    youtube_url: '',
    category: 'general'
  });

  const fetchVideos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_videos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setVideos(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const extractVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (url: string): string => {
    const videoId = extractVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const thumbnailUrl = getThumbnailUrl(formData.youtube_url);

      if (editingVideo) {
        const { error } = await supabase
          .from('gallery_videos')
          .update({
            title: formData.title,
            description: formData.description,
            youtube_url: formData.youtube_url,
            thumbnail_url: thumbnailUrl,
            category: formData.category
          })
          .eq('id', editingVideo.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Video updated successfully!' });
      } else {
        const { error } = await supabase
          .from('gallery_videos')
          .insert({
            title: formData.title,
            description: formData.description,
            youtube_url: formData.youtube_url,
            thumbnail_url: thumbnailUrl,
            category: formData.category
          });

        if (error) throw error;
        toast({ title: 'Success', description: 'Video added successfully!' });
      }

      setDialogOpen(false);
      setEditingVideo(null);
      setFormData({ title: '', description: '', youtube_url: '', category: 'general' });
      fetchVideos();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (video: GalleryVideo) => {
    if (!confirm('Are you sure you want to delete this video?')) return;

    try {
      const { error } = await supabase
        .from('gallery_videos')
        .delete()
        .eq('id', video.id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Video deleted successfully!' });
      fetchVideos();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const openEditDialog = (video: GalleryVideo) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      description: video.description || '',
      youtube_url: video.youtube_url,
      category: video.category
    });
    setDialogOpen(true);
  };

  const openNewDialog = () => {
    setEditingVideo(null);
    setFormData({ title: '', description: '', youtube_url: '', category: 'general' });
    setDialogOpen(true);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">YouTube Videos</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog} className="bg-gradient-to-r from-purple-500 to-pink-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Video
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle>{editingVideo ? 'Edit Video' : 'Add New Video'}</DialogTitle>
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
                <Label>YouTube URL</Label>
                <Input 
                  value={formData.youtube_url} 
                  onChange={(e) => setFormData({...formData, youtube_url: e.target.value})}
                  className="bg-white/10 border-white/20"
                  placeholder="https://www.youtube.com/watch?v=..."
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
              <Button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-purple-500 to-pink-600">
                {saving ? 'Saving...' : (editingVideo ? 'Update' : 'Add Video')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Video className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No videos added yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/5 rounded-lg overflow-hidden border border-white/10 group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail_url || getThumbnailUrl(video.youtube_url)} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" onClick={() => openEditDialog(video)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(video)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-white truncate">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoManager;
