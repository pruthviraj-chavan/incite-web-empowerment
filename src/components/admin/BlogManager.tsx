import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Edit, FileText, Eye, EyeOff } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  category: string;
  author: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

const categories = ['MS-CIT', 'Tally', 'Saarthi', 'MKCL', 'Typing', 'Programming', 'Career', 'Marathi', 'General'];

const BlogManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    is_published: false,
    file: null as File | null
  });

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let imageUrl = editingBlog?.featured_image || null;

      if (formData.file) {
        const fileExt = formData.file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `blogs/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blogs')
          .upload(filePath, formData.file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('blogs')
          .getPublicUrl(filePath);
        
        imageUrl = publicUrl;
      }

      const slug = generateSlug(formData.title);
      const publishedAt = formData.is_published ? new Date().toISOString() : null;

      if (editingBlog) {
        const { error } = await supabase
          .from('blogs')
          .update({
            title: formData.title,
            slug,
            excerpt: formData.excerpt,
            content: formData.content,
            category: formData.category,
            featured_image: imageUrl,
            is_published: formData.is_published,
            published_at: formData.is_published && !editingBlog.published_at ? publishedAt : editingBlog.published_at
          })
          .eq('id', editingBlog.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Blog updated successfully!' });
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert({
            title: formData.title,
            slug,
            excerpt: formData.excerpt,
            content: formData.content,
            category: formData.category,
            featured_image: imageUrl,
            is_published: formData.is_published,
            published_at: publishedAt
          });

        if (error) throw error;
        toast({ title: 'Success', description: 'Blog created successfully!' });
      }

      setDialogOpen(false);
      setEditingBlog(null);
      setFormData({ title: '', excerpt: '', content: '', category: 'General', is_published: false, file: null });
      fetchBlogs();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (blog: Blog) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      if (blog.featured_image) {
        const path = blog.featured_image.split('/blogs/').pop();
        if (path) {
          await supabase.storage.from('blogs').remove([path]);
        }
      }

      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blog.id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Blog deleted successfully!' });
      fetchBlogs();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const togglePublish = async (blog: Blog) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .update({ 
          is_published: !blog.is_published,
          published_at: !blog.is_published ? new Date().toISOString() : blog.published_at
        })
        .eq('id', blog.id);

      if (error) throw error;
      toast({ title: 'Success', description: `Blog ${!blog.is_published ? 'published' : 'unpublished'}!` });
      fetchBlogs();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const openEditDialog = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt || '',
      content: blog.content,
      category: blog.category,
      is_published: blog.is_published,
      file: null
    });
    setDialogOpen(true);
  };

  const openNewDialog = () => {
    setEditingBlog(null);
    setFormData({ title: '', excerpt: '', content: '', category: 'General', is_published: false, file: null });
    setDialogOpen(true);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Blog Posts</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog} className="bg-gradient-to-r from-orange-500 to-red-600">
              <Plus className="w-4 h-4 mr-2" />
              New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
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
                <Label>Excerpt (Short description)</Label>
                <Textarea 
                  value={formData.excerpt} 
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="bg-white/10 border-white/20"
                  rows={2}
                />
              </div>
              <div>
                <Label>Content</Label>
                <Textarea 
                  value={formData.content} 
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="bg-white/10 border-white/20"
                  rows={8}
                  required
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
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Featured Image</Label>
                <Input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  className="bg-white/10 border-white/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch 
                  checked={formData.is_published}
                  onCheckedChange={(checked) => setFormData({...formData, is_published: checked})}
                />
                <Label>Publish immediately</Label>
              </div>
              <Button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                {saving ? 'Saving...' : (editingBlog ? 'Update' : 'Create Blog')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No blog posts yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-4">
              {blog.featured_image && (
                <img src={blog.featured_image} alt={blog.title} className="w-20 h-20 object-cover rounded-lg" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-white truncate">{blog.title}</h3>
                  {blog.is_published ? (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Published</span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/20 text-gray-400">Draft</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{blog.excerpt}</p>
                <p className="text-xs text-gray-500 mt-1">{blog.category} • {new Date(blog.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => togglePublish(blog)} className="text-gray-400 hover:text-white">
                  {blog.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => openEditDialog(blog)} className="text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(blog)} className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogManager;
