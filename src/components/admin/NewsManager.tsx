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
import { Plus, Trash2, Edit, Newspaper, Eye, EyeOff } from 'lucide-react';

interface News {
  id: string;
  headline: string;
  subheadline: string | null;
  content: string;
  image_url: string | null;
  template_type: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

const templateTypes = [
  { id: 'classic', name: 'Classic', description: 'Traditional newspaper style' },
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary' },
  { id: 'breaking', name: 'Breaking News', description: 'Urgent and eye-catching' },
  { id: 'featured', name: 'Featured', description: 'Large image with overlay' }
];

const NewsManager = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    headline: '',
    subheadline: '',
    content: '',
    template_type: 'classic',
    is_published: false,
    file: null as File | null
  });

  const fetchNews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setNews(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let imageUrl = editingNews?.image_url || null;

      if (formData.file) {
        const fileExt = formData.file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `news/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('news')
          .upload(filePath, formData.file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('news')
          .getPublicUrl(filePath);
        
        imageUrl = publicUrl;
      }

      const publishedAt = formData.is_published ? new Date().toISOString() : null;

      if (editingNews) {
        const { error } = await supabase
          .from('news')
          .update({
            headline: formData.headline,
            subheadline: formData.subheadline,
            content: formData.content,
            template_type: formData.template_type,
            image_url: imageUrl,
            is_published: formData.is_published,
            published_at: formData.is_published && !editingNews.published_at ? publishedAt : editingNews.published_at
          })
          .eq('id', editingNews.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'News updated successfully!' });
      } else {
        const { error } = await supabase
          .from('news')
          .insert({
            headline: formData.headline,
            subheadline: formData.subheadline,
            content: formData.content,
            template_type: formData.template_type,
            image_url: imageUrl,
            is_published: formData.is_published,
            published_at: publishedAt
          });

        if (error) throw error;
        toast({ title: 'Success', description: 'News created successfully!' });
      }

      setDialogOpen(false);
      setEditingNews(null);
      setFormData({ headline: '', subheadline: '', content: '', template_type: 'classic', is_published: false, file: null });
      fetchNews();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: News) => {
    if (!confirm('Are you sure you want to delete this news?')) return;

    try {
      if (item.image_url) {
        const path = item.image_url.split('/news/').pop();
        if (path) {
          await supabase.storage.from('news').remove([path]);
        }
      }

      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', item.id);

      if (error) throw error;
      toast({ title: 'Success', description: 'News deleted successfully!' });
      fetchNews();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const togglePublish = async (item: News) => {
    try {
      const { error } = await supabase
        .from('news')
        .update({ 
          is_published: !item.is_published,
          published_at: !item.is_published ? new Date().toISOString() : item.published_at
        })
        .eq('id', item.id);

      if (error) throw error;
      toast({ title: 'Success', description: `News ${!item.is_published ? 'published' : 'unpublished'}!` });
      fetchNews();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const openEditDialog = (item: News) => {
    setEditingNews(item);
    setFormData({
      headline: item.headline,
      subheadline: item.subheadline || '',
      content: item.content,
      template_type: item.template_type,
      is_published: item.is_published,
      file: null
    });
    setDialogOpen(true);
  };

  const openNewDialog = () => {
    setEditingNews(null);
    setFormData({ headline: '', subheadline: '', content: '', template_type: 'classic', is_published: false, file: null });
    setDialogOpen(true);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">News Articles</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog} className="bg-gradient-to-r from-green-500 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              New News
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingNews ? 'Edit News' : 'Create News Article'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Headline</Label>
                <Input 
                  value={formData.headline} 
                  onChange={(e) => setFormData({...formData, headline: e.target.value})}
                  className="bg-white/10 border-white/20"
                  required
                />
              </div>
              <div>
                <Label>Subheadline</Label>
                <Input 
                  value={formData.subheadline} 
                  onChange={(e) => setFormData({...formData, subheadline: e.target.value})}
                  className="bg-white/10 border-white/20"
                />
              </div>
              <div>
                <Label>Content</Label>
                <Textarea 
                  value={formData.content} 
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="bg-white/10 border-white/20"
                  rows={6}
                  required
                />
              </div>
              <div>
                <Label>Template Style</Label>
                <Select value={formData.template_type} onValueChange={(v) => setFormData({...formData, template_type: v})}>
                  <SelectTrigger className="bg-white/10 border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {templateTypes.map(t => (
                      <SelectItem key={t.id} value={t.id}>
                        <div>
                          <div className="font-medium">{t.name}</div>
                          <div className="text-xs text-gray-400">{t.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Image</Label>
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
              <Button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-green-500 to-teal-600">
                {saving ? 'Saving...' : (editingNews ? 'Update' : 'Create News')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : news.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No news articles yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-4">
              {item.image_url && (
                <img src={item.image_url} alt={item.headline} className="w-20 h-20 object-cover rounded-lg" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-white truncate">{item.headline}</h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    item.template_type === 'breaking' ? 'bg-red-500/20 text-red-400' :
                    item.template_type === 'featured' ? 'bg-purple-500/20 text-purple-400' :
                    item.template_type === 'modern' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>{item.template_type}</span>
                  {item.is_published ? (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Published</span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/20 text-gray-400">Draft</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{item.subheadline}</p>
                <p className="text-xs text-gray-500 mt-1">{new Date(item.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => togglePublish(item)} className="text-gray-400 hover:text-white">
                  {item.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => openEditDialog(item)} className="text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(item)} className="text-red-400 hover:text-red-300">
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

export default NewsManager;
