import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet';
import { Calendar, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface News {
  id: string;
  headline: string;
  subheadline: string | null;
  content: string;
  image_url: string | null;
  template_type: string;
  published_at: string | null;
  created_at: string;
}

const NewsPage = memo(() => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching news:', error);
      } else {
        setNews(data || []);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const handleShare = async (item: News) => {
    const shareUrl = `${window.location.origin}/news#${item.id}`;
    const shareText = `${item.headline} - Incite Computers News`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.headline,
          text: shareText,
          url: shareUrl
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: 'Link copied!', description: 'Share link copied to clipboard' });
    }
  };

  const renderNewsCard = (item: News) => {
    const date = item.published_at ? new Date(item.published_at).toLocaleDateString('mr-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) : '';

    switch (item.template_type) {
      case 'breaking':
        return (
          <div key={item.id} id={item.id} className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-red-400">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
              <span className="animate-pulse w-3 h-3 bg-white rounded-full"></span>
              <span className="text-white font-bold text-sm uppercase tracking-wider">Breaking News</span>
            </div>
            <div className="p-6 md:p-8">
              {item.image_url && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img src={item.image_url} alt={item.headline} className="w-full h-64 object-cover" loading="lazy" />
                </div>
              )}
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">{item.headline}</h2>
              {item.subheadline && <p className="text-lg text-white/80 mb-4">{item.subheadline}</p>}
              <p className="text-white/90 leading-relaxed mb-6">{item.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="Incite Computers" className="w-8 h-8" />
                  <span>Incite Computers</span>
                  <span>•</span>
                  <span>{date}</span>
                </div>
                <Button variant="secondary" size="sm" onClick={() => handleShare(item)}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        );

      case 'featured':
        return (
          <div key={item.id} id={item.id} className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
            {item.image_url && (
              <img src={item.image_url} alt={item.headline} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-end p-6 md:p-10">
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-4 w-fit">
                Featured Story
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{item.headline}</h2>
              {item.subheadline && <p className="text-xl text-white/80 mb-4">{item.subheadline}</p>}
              <p className="text-white/90 leading-relaxed mb-6 line-clamp-3">{item.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/70">
                  <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="Incite Computers" className="w-8 h-8" />
                  <span>Incite Computers</span>
                  <span>•</span>
                  <span>{date}</span>
                </div>
                <Button variant="secondary" size="sm" onClick={() => handleShare(item)}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        );

      case 'modern':
        return (
          <div key={item.id} id={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="md:flex">
              {item.image_url && (
                <div className="md:w-2/5">
                  <img src={item.image_url} alt={item.headline} className="w-full h-64 md:h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className={`p-6 md:p-8 ${item.image_url ? 'md:w-3/5' : 'w-full'}`}>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  Latest Update
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">{item.headline}</h2>
                {item.subheadline && <p className="text-lg text-gray-600 mb-4">{item.subheadline}</p>}
                <p className="text-gray-700 leading-relaxed mb-6">{item.content}</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="Incite Computers" className="w-8 h-8" />
                    <div>
                      <p className="font-medium text-gray-900">Incite Computers</p>
                      <p>{date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShare(item)}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default: // classic
        return (
          <div key={item.id} id={item.id} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
            {/* Newspaper header */}
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 px-6 py-4 text-center border-b-4 border-amber-600">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="Incite Computers" className="w-10 h-10" />
                <h3 className="text-2xl font-serif font-bold text-amber-100 tracking-wide">INCITE COMPUTERS</h3>
              </div>
              <p className="text-amber-300 text-sm font-serif italic">राधानगरी, कोल्हापूर • Since 2001</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-4 text-amber-700 text-sm font-serif">{date}</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 text-center leading-tight border-b-2 border-amber-300 pb-4">{item.headline}</h2>
              
              {item.subheadline && (
                <p className="text-lg text-amber-800 mb-6 text-center font-serif italic">{item.subheadline}</p>
              )}
              
              <div className="md:flex gap-6">
                {item.image_url && (
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <div className="border-4 border-amber-300 rounded-lg overflow-hidden shadow-lg">
                      <img src={item.image_url} alt={item.headline} className="w-full h-64 object-cover" loading="lazy" />
                    </div>
                  </div>
                )}
                <div className={item.image_url ? 'md:w-1/2' : 'w-full'}>
                  <p className="text-amber-900 leading-relaxed font-serif text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-amber-700">
                    {item.content}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t-2 border-amber-300 flex items-center justify-between">
                <p className="text-amber-700 text-sm font-serif">Published by Incite Computers, Radhanagari</p>
                <Button variant="outline" size="sm" onClick={() => handleShare(item)} className="border-amber-400 text-amber-700 hover:bg-amber-100">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>News | Incite Computers Radhanagari | Latest Updates & Announcements</title>
        <meta name="description" content="Latest news and announcements from Incite Computers Radhanagari. Stay updated with new courses, events, and achievements." />
      </Helmet>
      
      <div className="min-h-screen pt-20 md:pt-24 pb-12">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
                📰 Latest Updates from Our Institute
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Incite <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">News</span>
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Stay informed about our latest courses, events, achievements, and announcements
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No news articles published yet.</p>
              </div>
            ) : (
              <div className="space-y-8 max-w-4xl mx-auto">
                {news.map(renderNewsCard)}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
});

NewsPage.displayName = 'NewsPage';

export default NewsPage;
