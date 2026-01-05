import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet';
import { Share2 } from 'lucide-react';
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
    if (navigator.share) {
      try {
        await navigator.share({ title: item.headline, url: shareUrl });
      } catch (error) {}
    } else {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: 'Link copied!' });
    }
  };

  const renderNewsCard = (item: News) => {
    const date = item.published_at ? new Date(item.published_at).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric'
    }) : '';

    const templates: Record<string, JSX.Element> = {
      // NEWSPAPER STYLE - Like the reference image
      newspaper: (
        <div key={item.id} id={item.id} className="bg-[#f5f0e6] rounded-lg overflow-hidden shadow-2xl border border-[#d4c5a9] max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-[#1e3a5f] px-6 py-4">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">INCITE</h3>
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">COMPUTER</h3>
              <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-10 h-10" />
              <span className="text-xl text-[#c9a227] font-serif">RADHANAGARI</span>
            </div>
          </div>
          
          {/* Meta bar */}
          <div className="bg-[#1e3a5f]/90 px-6 py-2 flex items-center justify-between text-white text-sm">
            <span className="font-serif">{date}</span>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#c9a227] text-[#1e3a5f] font-bold text-xs rounded">TECHNOLOGY</span>
              <span className="px-3 py-1 bg-white/20 text-xs rounded">INNOVATION</span>
              <span className="px-3 py-1 bg-white/20 text-xs rounded">EDUCATION</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1e3a5f] leading-tight mb-6">
              {item.headline}
            </h1>
            
            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2">
                <p className="text-gray-700 leading-relaxed mb-4 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#1e3a5f]">
                  {item.content}
                </p>
                
                {item.image_url && (
                  <div className="mt-4 border-2 border-[#d4c5a9] rounded overflow-hidden">
                    <img src={item.image_url} alt={item.headline} className="w-full h-64 object-cover" loading="lazy" />
                    <p className="text-xs text-gray-600 p-2 bg-[#f0e9d8] italic text-center">Students at Incite Computers explore latest technology.</p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-[#f0e9d8] p-4 border-l-4 border-[#c9a227]">
                  <h4 className="font-serif font-bold text-[#1e3a5f] mb-2">LOCAL TECH HUB</h4>
                  <p className="text-sm text-gray-700">Incite Computers continues to lead digital education in Radhanagari region with innovative courses.</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] p-4 rounded text-white">
                  <span className="text-[#c9a227] font-bold text-lg">ADMISSION</span>
                  <span className="text-white font-bold text-lg ml-1">OPEN</span>
                  <p className="text-sm mt-2 text-white/80">New Batches for MS-CIT, Tally & More</p>
                  <p className="text-xs mt-2">📞 9423281767</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-[#1e3a5f] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="text-white font-semibold">INCITE COMPUTER CLASSES</span>
            </div>
            <div className="flex items-center gap-4 text-white text-sm">
              <span>www.incitecomputer.com</span>
              <span>📞 9676543310</span>
              <Button variant="secondary" size="sm" onClick={() => handleShare(item)}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ),
      
      // BREAKING NEWS
      breaking: (
        <div key={item.id} id={item.id} className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
            <span className="animate-pulse w-3 h-3 bg-white rounded-full"></span>
            <span className="text-white font-bold text-sm uppercase tracking-wider">Breaking News</span>
          </div>
          <div className="p-6 md:p-8">
            {item.image_url && <img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-xl mb-6" loading="lazy" />}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{item.headline}</h2>
            {item.subheadline && <p className="text-lg text-white/80 mb-4">{item.subheadline}</p>}
            <p className="text-white/90 leading-relaxed mb-6">{item.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
                <span>Incite Computers • {date}</span>
              </div>
              <Button variant="secondary" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      ),

      // FEATURED HERO
      featured: (
        <div key={item.id} id={item.id} className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
          {item.image_url && <img src={item.image_url} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="relative h-full flex flex-col justify-end p-6 md:p-10 min-h-[500px]">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-4 w-fit">Featured</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.headline}</h2>
            <p className="text-white/90 leading-relaxed mb-6 line-clamp-3">{item.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white/70">
                <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
                <span>Incite Computers • {date}</span>
              </div>
              <Button variant="secondary" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      ),

      // MODERN CARD
      modern: (
        <div key={item.id} id={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="md:flex">
            {item.image_url && <div className="md:w-2/5"><img src={item.image_url} alt="" className="w-full h-64 md:h-full object-cover" loading="lazy" /></div>}
            <div className={`p-6 md:p-8 ${item.image_url ? 'md:w-3/5' : 'w-full'}`}>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Latest Update</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">{item.headline}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{item.content}</p>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
                  <div><p className="font-medium text-gray-900">Incite Computers</p><p>{date}</p></div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      ),

      // GRADIENT GLASS
      gradient: (
        <div key={item.id} id={item.id} className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-10 h-10" />
            <span className="text-white font-semibold">Incite Computers</span>
            <span className="text-white/60 text-sm ml-auto">{date}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{item.headline}</h2>
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-xl mb-4 border-2 border-white/20" loading="lazy" />}
          <p className="text-white/90 leading-relaxed mb-6">{item.content}</p>
          <Button variant="secondary" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4 mr-2" />Share</Button>
        </div>
      ),

      // MAGAZINE
      magazine: (
        <div key={item.id} id={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            {item.image_url && <img src={item.image_url} alt="" className="w-full h-full object-cover min-h-[300px]" loading="lazy" />}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-gray-500 text-sm font-medium">{date}</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">{item.headline}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
              <div className="flex items-center gap-3">
                <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
                <span className="text-gray-700 font-medium">Incite Computers</span>
                <Button variant="outline" size="sm" className="ml-auto" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      ),

      // MINIMAL DARK
      minimal: (
        <div key={item.id} id={item.id} className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-400 text-sm">{date}</span>
            <Button variant="ghost" size="sm" className="text-slate-400" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{item.headline}</h2>
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />}
          <p className="text-slate-300 leading-relaxed">{item.content}</p>
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-700">
            <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
            <span className="text-white font-medium">Incite Computers</span>
          </div>
        </div>
      ),

      // NEON GLOW
      neon: (
        <div key={item.id} id={item.id} className="bg-black rounded-2xl p-6 md:p-8 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00ffff]"></div>
            <span className="text-cyan-400 text-sm uppercase tracking-wider font-bold">Live Update</span>
            <span className="text-gray-500 text-sm ml-auto">{date}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{item.headline}</h2>
          {item.image_url && <img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-xl mb-4 border border-cyan-500/30" loading="lazy" />}
          <p className="text-gray-300 leading-relaxed mb-6">{item.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
              <span className="text-cyan-400 font-medium">Incite Computers</span>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4" /></Button>
          </div>
        </div>
      ),

      // CORPORATE
      corporate: (
        <div key={item.id} id={item.id} className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-blue-800/50 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-8 h-8" />
              <span className="text-white font-semibold">Incite Computers</span>
            </div>
            <span className="text-blue-300 text-sm">{date}</span>
          </div>
          <div className="p-6 md:p-8">
            {item.image_url && <img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-xl mb-6" loading="lazy" />}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.headline}</h2>
            <p className="text-blue-100/80 leading-relaxed mb-6">{item.content}</p>
            <Button className="bg-white text-blue-900 hover:bg-blue-50" size="sm" onClick={() => handleShare(item)}><Share2 className="w-4 h-4 mr-2" />Share</Button>
          </div>
        </div>
      ),

      // CLASSIC (default)
      classic: (
        <div key={item.id} id={item.id} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="" className="w-10 h-10" />
              <h3 className="text-2xl font-serif font-bold text-amber-100">INCITE COMPUTERS</h3>
            </div>
            <p className="text-amber-300 text-sm font-serif italic">राधानगरी, कोल्हापूर • Since 2001</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="text-center mb-4 text-amber-700 text-sm font-serif">{date}</div>
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4 text-center border-b-2 border-amber-300 pb-4">{item.headline}</h2>
            <div className="md:flex gap-6">
              {item.image_url && <div className="md:w-1/2 mb-4 md:mb-0"><img src={item.image_url} alt="" className="w-full h-64 object-cover rounded-lg border-4 border-amber-300" loading="lazy" /></div>}
              <div className={item.image_url ? 'md:w-1/2' : 'w-full'}>
                <p className="text-amber-900 leading-relaxed font-serif text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-amber-700">{item.content}</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-amber-300 flex items-center justify-between">
              <p className="text-amber-700 text-sm font-serif">Published by Incite Computers, Radhanagari</p>
              <Button variant="outline" size="sm" onClick={() => handleShare(item)} className="border-amber-400 text-amber-700"><Share2 className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      )
    };

    return templates[item.template_type] || templates.classic;
  };

  return (
    <>
      <Helmet>
        <title>News | Incite Computers Radhanagari</title>
        <meta name="description" content="Latest news from Incite Computers Radhanagari." />
      </Helmet>
      
      <div className="min-h-screen pt-20 md:pt-24 pb-12">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
              📰 Latest Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Incite <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-lg text-white/80">Stay informed about our latest courses, events, and announcements</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No news articles published yet.</p>
              </div>
            ) : (
              <div className="space-y-8 max-w-5xl mx-auto">
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
