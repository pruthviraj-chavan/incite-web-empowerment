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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Trash2, Edit, Newspaper, Eye, EyeOff, Image as ImageIcon, Video } from 'lucide-react';

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
  { id: 'newspaper', name: '📰 Newspaper Style', description: 'Professional newspaper layout' },
  { id: 'classic', name: 'Classic', description: 'Traditional amber style' },
  { id: 'modern', name: 'Modern Card', description: 'Clean white design' },
  { id: 'breaking', name: '🔴 Breaking News', description: 'Red urgent banner' },
  { id: 'featured', name: '⭐ Featured Hero', description: 'Full image overlay' },
  { id: 'gradient', name: 'Gradient Glass', description: 'Purple-blue gradient' },
  { id: 'magazine', name: 'Magazine', description: 'Editorial split layout' },
  { id: 'minimal', name: 'Minimal Dark', description: 'Dark theme' },
  { id: 'neon', name: '💡 Neon Glow', description: 'Cyan neon accents' },
  { id: 'corporate', name: 'Corporate', description: 'Professional blue' }
];

const NewsManager = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewNews, setPreviewNews] = useState<News | null>(null);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    headline: '',
    subheadline: '',
    content: '',
    template_type: 'classic',
    youtube_url: '',
    is_published: false,
    file: null as File | null
  });

  const fetchNews = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
    if (!error) setNews(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchNews(); }, []);

  const extractVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let uploadedFilePath: string | null = null;

    try {
      let imageUrl = editingNews?.image_url || null;

      if (formData.file) {
        const fileName = `${Date.now()}.${formData.file.name.split('.').pop()}`;
        uploadedFilePath = `news/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('news').upload(uploadedFilePath, formData.file);
        if (uploadError) throw uploadError;
        imageUrl = supabase.storage.from('news').getPublicUrl(uploadedFilePath).data.publicUrl;
      } else if (mediaType === 'video' && formData.youtube_url) {
        const videoId = extractVideoId(formData.youtube_url);
        if (videoId) imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }

      const newsData = {
        headline: formData.headline,
        subheadline: formData.subheadline || null,
        content: formData.content,
        template_type: formData.template_type,
        image_url: imageUrl,
        is_published: formData.is_published,
        published_at: formData.is_published ? new Date().toISOString() : null
      };

      let error;
      if (editingNews) {
        const result = await supabase.from('news').update(newsData).eq('id', editingNews.id);
        error = result.error;
      } else {
        const result = await supabase.from('news').insert(newsData);
        error = result.error;
      }

      if (error) {
        // Cleanup uploaded file if insert/update failed
        if (uploadedFilePath && !editingNews) {
          await supabase.storage.from('news').remove([uploadedFilePath]);
        }
        throw error;
      }

      toast({ title: editingNews ? 'Updated!' : 'Created!', description: 'News saved successfully.' });
      setDialogOpen(false);
      resetForm();
      fetchNews();
    } catch (error: any) {
      console.error('News save error:', error);
      toast({ title: 'Error saving news', description: error.message || 'Unknown error', variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setEditingNews(null);
    setFormData({ headline: '', subheadline: '', content: '', template_type: 'classic', youtube_url: '', is_published: false, file: null });
    setMediaType('image');
  };

  const handleDelete = async (item: News) => {
    if (!confirm('Delete?')) return;
    if (item.image_url?.includes('supabase')) {
      const path = item.image_url.split('/news/').pop();
      if (path) await supabase.storage.from('news').remove([path]);
    }
    await supabase.from('news').delete().eq('id', item.id);
    toast({ title: 'Deleted!' });
    fetchNews();
  };

  const togglePublish = async (item: News) => {
    await supabase.from('news').update({ is_published: !item.is_published, published_at: !item.is_published ? new Date().toISOString() : item.published_at }).eq('id', item.id);
    fetchNews();
  };

  const renderPreview = (item: News) => {
    const date = new Date(item.published_at || item.created_at).toLocaleDateString('en-IN');
    const templates: Record<string, JSX.Element> = {
      newspaper: (
        <div className="bg-[#f5f0e6] rounded-lg overflow-hidden border border-[#d4c5a9]">
          <div className="bg-[#1e3a5f] px-3 py-2 flex items-center justify-center gap-2">
            <span className="text-white font-serif font-bold">INCITE COMPUTER</span>
            <span className="text-[#c9a227] font-serif">RADHANAGARI</span>
          </div>
          <div className="p-3">
            <h2 className="text-lg font-serif font-bold text-[#1e3a5f] mb-2">{item.headline}</h2>
            {item.image_url && <img src={item.image_url} alt="" className="w-full h-24 object-cover rounded mb-2" />}
            <p className="text-gray-700 text-xs line-clamp-2">{item.content}</p>
          </div>
          <div className="bg-[#1e3a5f] px-3 py-1 text-center text-white text-xs">📞 9423281767</div>
        </div>
      ),
      classic: (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200">
          <div className="bg-amber-800 px-3 py-2 text-center rounded-t-lg -mx-4 -mt-4 mb-3">
            <h3 className="text-lg font-serif font-bold text-amber-100">INCITE COMPUTERS</h3>
          </div>
          <h2 className="text-xl font-serif font-bold text-amber-900 text-center border-b border-amber-300 pb-2 mb-2">{item.headline}</h2>
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-32 object-cover rounded mb-2" />}
          <p className="text-amber-900 font-serif text-sm line-clamp-3">{item.content}</p>
        </div>
      ),
      modern: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-32 object-cover" />}
          <div className="p-3"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Update</span>
          <h2 className="text-lg font-bold text-gray-900 mt-1">{item.headline}</h2></div>
        </div>
      ),
      breaking: (
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl overflow-hidden">
          <div className="bg-white/10 px-2 py-1 flex items-center gap-1"><span className="animate-pulse w-2 h-2 bg-white rounded-full"></span><span className="text-white font-bold text-xs uppercase">Breaking</span></div>
          <div className="p-3">{item.image_url && <img src={item.image_url} alt="" className="w-full h-28 object-cover rounded mb-2" />}<h2 className="text-lg font-bold text-white">{item.headline}</h2></div>
        </div>
      ),
      featured: (
        <div className="relative rounded-xl overflow-hidden h-48">
          {item.image_url && <img src={item.image_url} alt="" className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 p-3"><span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded-full">Featured</span><h2 className="text-lg font-bold text-white mt-1">{item.headline}</h2></div>
        </div>
      ),
      gradient: (
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl p-4">
          <h2 className="text-xl font-bold text-white">{item.headline}</h2>
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-28 object-cover rounded-lg mt-2 border border-white/20" />}
        </div>
      ),
      magazine: (
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="grid grid-cols-2">{item.image_url && <img src={item.image_url} alt="" className="h-full object-cover" />}<div className="p-3"><span className="text-xs text-gray-500">{date}</span><h2 className="text-sm font-bold text-gray-900 leading-tight">{item.headline}</h2></div></div>
        </div>
      ),
      minimal: (
        <div className="bg-slate-900 rounded-xl p-4"><span className="text-slate-400 text-xs">{date}</span><h2 className="text-lg font-bold text-white mb-1">{item.headline}</h2>{item.image_url && <img src={item.image_url} alt="" className="w-full h-28 object-cover rounded mt-2" />}</div>
      ),
      neon: (
        <div className="bg-black rounded-xl p-4 border border-cyan-500/50">
          <div className="flex items-center gap-1 mb-2"><div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div><span className="text-cyan-400 text-xs uppercase">Live</span></div>
          <h2 className="text-lg font-bold text-white">{item.headline}</h2>{item.image_url && <img src={item.image_url} alt="" className="w-full h-28 object-cover rounded mt-2 border border-cyan-500/30" />}
        </div>
      ),
      corporate: (
        <div className="bg-blue-900 rounded-xl overflow-hidden">
          <div className="bg-blue-800/50 px-3 py-1.5 flex items-center justify-between"><span className="text-white font-semibold text-sm">Incite</span><span className="text-blue-300 text-xs">{date}</span></div>
          <div className="p-3">{item.image_url && <img src={item.image_url} alt="" className="w-full h-28 object-cover rounded mb-2" />}<h2 className="text-white font-bold">{item.headline}</h2></div>
        </div>
      )
    };
    return templates[item.template_type] || templates.classic;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">News Articles</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setDialogOpen(true); }} className="bg-gradient-to-r from-green-500 to-teal-600"><Plus className="w-4 h-4 mr-2" /> New</Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/20 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editingNews ? 'Edit' : 'Create'} News</DialogTitle></DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><Label>Headline</Label><Input value={formData.headline} onChange={(e) => setFormData({...formData, headline: e.target.value})} className="bg-white/10 border-white/20" required /></div>
              <div><Label>Subheadline</Label><Input value={formData.subheadline} onChange={(e) => setFormData({...formData, subheadline: e.target.value})} className="bg-white/10 border-white/20" /></div>
              <div><Label>Content</Label><Textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="bg-white/10 border-white/20" rows={5} required /></div>
              <div><Label>Template</Label>
                <Select value={formData.template_type} onValueChange={(v) => setFormData({...formData, template_type: v})}>
                  <SelectTrigger className="bg-white/10 border-white/20"><SelectValue /></SelectTrigger>
                  <SelectContent>{templateTypes.map(t => (<SelectItem key={t.id} value={t.id}><span className="font-medium">{t.name}</span> <span className="text-xs text-gray-400">- {t.description}</span></SelectItem>))}</SelectContent>
                </Select>
              </div>
              <div><Label>Media</Label>
                <Tabs value={mediaType} onValueChange={(v: any) => setMediaType(v)} className="mt-2">
                  <TabsList className="bg-white/10">
                    <TabsTrigger value="image" className="data-[state=active]:bg-white/20"><ImageIcon className="w-4 h-4 mr-1" /> Image</TabsTrigger>
                    <TabsTrigger value="video" className="data-[state=active]:bg-white/20"><Video className="w-4 h-4 mr-1" /> YouTube</TabsTrigger>
                  </TabsList>
                  <TabsContent value="image" className="mt-2"><Input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && setFormData({...formData, file: e.target.files[0]})} className="bg-white/10 border-white/20" /></TabsContent>
                  <TabsContent value="video" className="mt-2"><Input value={formData.youtube_url} onChange={(e) => setFormData({...formData, youtube_url: e.target.value})} placeholder="https://youtube.com/watch?v=..." className="bg-white/10 border-white/20" /><p className="text-xs text-gray-400 mt-1">YouTube thumbnail will be used</p></TabsContent>
                </Tabs>
              </div>
              <div className="flex items-center gap-2"><Switch checked={formData.is_published} onCheckedChange={(checked) => setFormData({...formData, is_published: checked})} /><Label>Publish now</Label></div>
              <div className="border border-white/20 rounded-lg p-3"><Label className="text-xs text-gray-400 mb-2 block">Preview</Label>
                {renderPreview({ id: 'p', headline: formData.headline || 'Headline', subheadline: formData.subheadline, content: formData.content || 'Content...', image_url: formData.youtube_url ? `https://img.youtube.com/vi/${extractVideoId(formData.youtube_url) || ''}/maxresdefault.jpg` : editingNews?.image_url || null, template_type: formData.template_type, is_published: false, published_at: new Date().toISOString(), created_at: new Date().toISOString() })}
              </div>
              <Button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-green-500 to-teal-600">{saving ? 'Saving...' : 'Save'}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="bg-slate-900 border-white/20 max-w-lg"><DialogHeader><DialogTitle className="text-white">Preview</DialogTitle></DialogHeader>{previewNews && renderPreview(previewNews)}</DialogContent>
      </Dialog>

      {loading ? (<div className="text-center py-12"><div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div></div>
      ) : news.length === 0 ? (<div className="text-center py-12 text-gray-400"><Newspaper className="w-12 h-12 mx-auto mb-4 opacity-50" /><p>No news yet</p></div>
      ) : (
        <div className="space-y-3">
          {news.map((item) => (
            <div key={item.id} className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center gap-3">
              {item.image_url && <img src={item.image_url} alt="" className="w-16 h-16 object-cover rounded" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-medium text-white truncate">{item.headline}</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-slate-700 text-slate-300">{item.template_type}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${item.is_published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>{item.is_published ? 'Published' : 'Draft'}</span>
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" onClick={() => { setPreviewNews(item); setPreviewOpen(true); }} className="text-blue-400"><Eye className="w-4 h-4" /></Button>
                <Button size="sm" variant="ghost" onClick={() => togglePublish(item)} className="text-gray-400">{item.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</Button>
                <Button size="sm" variant="ghost" onClick={() => { setEditingNews(item); setFormData({ headline: item.headline, subheadline: item.subheadline || '', content: item.content, template_type: item.template_type, youtube_url: '', is_published: item.is_published, file: null }); setDialogOpen(true); }} className="text-gray-400"><Edit className="w-4 h-4" /></Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(item)} className="text-red-400"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsManager;
