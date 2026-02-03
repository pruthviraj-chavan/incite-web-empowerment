import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Image as ImageIcon, Camera, Sparkles, Grid3X3, LayoutGrid } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string;
  created_at: string;
}

interface GalleryVideo {
  id: string;
  title: string;
  description: string | null;
  youtube_url: string;
  thumbnail_url: string | null;
  category: string;
  created_at: string;
}

// Static images that are already in the project
const staticImages: Record<string, { id: number; src: string; date: string }[]> = {
  lab: [
    { id: 1, src: "/img-03.jpg", date: "June 15, 2023" },
    { id: 2, src: "/img-11.jpg", date: "July 22, 2023" },
    { id: 3, src: "/img-12.jpg", date: "August 5, 2023" }
  ],
  hall: [
    { id: 1, src: "/img-08.jpg", date: "May 10, 2023" },
    { id: 2, src: "/img-04.jpg", date: "June 28, 2023" },
    { id: 3, src: "/img-03.jpg", date: "September 15, 2023" }
  ],
  office: [
    { id: 1, src: "/img-06.jpg", date: "April 20, 2023" },
    { id: 2, src: "/img-05.jpg", date: "July 12, 2023" },
    { id: 3, src: "/img-03.jpg", date: "August 25, 2023" }
  ],
  reception: [
    { id: 1, src: "/img-06.jpg", date: "March 15, 2023" },
    { id: 2, src: "/img-07.jpg", date: "May 22, 2023" },
    { id: 3, src: "/img-03.jpg", date: "July 5, 2023" }
  ],
  seminar: [
    { id: 1, src: "/img-14.jpg", date: "April 10, 2023" },
    { id: 2, src: "/img-13.jpg", date: "June 18, 2023" },
    { id: 3, src: "/img-15.jpg", date: "August 20, 2023" }
  ],
  placement: [
    { id: 1, src: "/img-03.jpg", date: "May 15, 2023" },
    { id: 2, src: "/img-02.jpg", date: "July 25, 2023" },
    { id: 3, src: "/img-01.jpg", date: "September 8, 2023" }
  ],
  lectures: [
    { id: 1, src: "/img-16.jpg", date: "April 22, 2023" },
    { id: 2, src: "/img-12.jpg", date: "June 15, 2023" },
    { id: 3, src: "/img-11.jpg", date: "August 10, 2023" }
  ],
  activities: [
    { id: 1, src: "/img-01.jpg", date: "May 18, 2023" },
    { id: 2, src: "/img-02.jpg", date: "July 7, 2023" },
    { id: 3, src: "/img-03.jpg", date: "August 25, 2023" }
  ],
  advertisements: [
    { id: 1, src: "/m1.jpeg", date: "जानेवारी १०, २०२३" },
    { id: 2, src: "/m2.jpeg", date: "एप्रिल ५, २०२३" },
    { id: 3, src: "/m3.jpeg", date: "सप्टेंबर १, २०२३" },
    { id: 4, src: "/m4.jpeg", date: "ऑक्टोबर २०, २०२३" },
    { id: 5, src: "/m5.jpeg", date: "मे २, २०२३" },
    { id: 6, src: "/m1.jpeg", date: "फेब्रुवारी १५, २०२३" }
  ]
};

const categoryIcons: Record<string, string> = {
  general: "📸",
  lab: "💻",
  hall: "🎓",
  office: "🏢",
  reception: "🛎️",
  seminar: "📊",
  placement: "💼",
  lectures: "🎤",
  activities: "🎯",
  advertisements: "📢"
};

const GalleryPage = memo(() => {
  const [selectedTab, setSelectedTab] = useState("images");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [dbImages, setDbImages] = useState<GalleryImage[]>([]);
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    { id: "general", name: "General", color: "from-violet-500 to-purple-600" },
    { id: "lab", name: "Computer Lab", color: "from-blue-500 to-cyan-500" },
    { id: "hall", name: "Lecture Hall", color: "from-emerald-500 to-teal-500" },
    { id: "office", name: "Office Area", color: "from-amber-500 to-orange-500" },
    { id: "reception", name: "Reception", color: "from-pink-500 to-rose-500" },
    { id: "seminar", name: "Seminar Sessions", color: "from-indigo-500 to-blue-600" },
    { id: "placement", name: "Placement Area", color: "from-green-500 to-emerald-600" },
    { id: "lectures", name: "Guest Lectures", color: "from-purple-500 to-violet-600" },
    { id: "activities", name: "Student Activities", color: "from-red-500 to-pink-600" },
    { id: "advertisements", name: "आमच्या जाहिराती", color: "from-orange-500 to-amber-600" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [imagesRes, videosRes] = await Promise.all([
        supabase.from('gallery_images').select('*').eq('is_active', true).order('created_at', { ascending: false }),
        supabase.from('gallery_videos').select('*').eq('is_active', true).order('created_at', { ascending: false })
      ]);

      if (imagesRes.data) setDbImages(imagesRes.data);
      if (videosRes.data) setVideos(videosRes.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const extractVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Combine static and database images for the selected category
  const getCategoryImages = (category: string) => {
    const staticImgs = staticImages[category] || [];
    const dbImgs = dbImages.filter(img => img.category === category);
    
    return [
      ...dbImgs.map(img => ({
        id: img.id,
        src: img.image_url,
        isFromDb: true
      })),
      ...staticImgs.map(img => ({ ...img, id: `static-${img.id}`, isFromDb: false }))
    ];
  };

  const currentCategory = galleryCategories.find(c => c.id === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Incite Computers Radhanagari - Photos & Videos</title>
        <meta name="description" content="Explore our gallery featuring computer labs, lecture halls, student activities, seminars and more at Incite Computers Radhanagari. Best computer training institute in Kolhapur district." />
        <meta property="og:title" content="Incite Computers Radhanagari - Gallery" />
        <meta property="og:description" content="View our modern computer labs, training sessions, and student activities. 20+ years of excellence in computer education in Radhanagari, Kolhapur." />
        <meta property="og:image" content="/img-03.jpg" />
        <meta property="og:url" content="https://incitecomputer.com/gallery" />
        <link rel="canonical" href="https://incitecomputer.com/gallery" />
      </Helmet>

      <div className="page-fade-in">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
            </div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90 font-medium">Visual Journey Through Excellence</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Gallery</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Capturing moments of learning, growth, and success at Incite Computers
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {[
                  { icon: Camera, label: "Photos", value: "500+" },
                  { icon: Play, label: "Videos", value: "50+" },
                  { icon: Grid3X3, label: "Categories", value: "10" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="images" onValueChange={setSelectedTab} className="w-full">
              {/* Main Tabs */}
              <div className="flex justify-center mb-6 md:mb-10">
                <TabsList className="bg-white shadow-lg rounded-full p-1 border border-gray-100">
                  <TabsTrigger 
                    value="images" 
                    className="px-5 md:px-8 py-2.5 md:py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white font-semibold text-sm md:text-base transition-all duration-200"
                  >
                    <ImageIcon className="w-4 h-4 mr-1.5" />
                    Photos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="videos" 
                    className="px-5 md:px-8 py-2.5 md:py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold text-sm md:text-base transition-all duration-200"
                  >
                    <Play className="w-4 h-4 mr-1.5" />
                    Videos
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Images Tab */}
              <TabsContent value="images">
                {/* Category Pills - Horizontal Scroll on Mobile */}
                <div className="mb-6 md:mb-10 -mx-4 px-4 md:mx-0 md:px-0">
                  <div className="flex md:flex-wrap md:justify-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {galleryCategories.map((category) => (
                      <button 
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id 
                            ? `bg-gradient-to-r ${category.color} text-white shadow-md` 
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span>{categoryIcons[category.id]}</span>
                        <span className="whitespace-nowrap">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Image Grid - Compact on Mobile */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                  {getCategoryImages(selectedCategory).map((image) => (
                    <div
                      key={image.id}
                      className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer bg-gray-100"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt="Gallery"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover Overlay - Desktop only */}
                      <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <LayoutGrid className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {getCategoryImages(selectedCategory).length === 0 && (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Camera className="w-12 h-12 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-lg">No images in this category yet</p>
                  </div>
                )}
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                {loading ? (
                  <div className="flex justify-center py-20">
                    <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : videos.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-lg">No videos uploaded yet</p>
                    <p className="text-gray-400 text-sm mt-2">Check back soon for video content!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => {
                      const videoId = extractVideoId(video.youtube_url);
                      const isPlaying = playingVideo === video.id;
                      
                      return (
                        <motion.div 
                          key={video.id} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                          <div className="relative aspect-video overflow-hidden">
                            {isPlaying ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            ) : (
                              <>
                                <img 
                                  src={video.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                  alt={video.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  loading="lazy"
                                />
                                <button 
                                  onClick={() => setPlayingVideo(video.id)}
                                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent"
                                >
                                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                  </div>
                                </button>
                              </>
                            )}
                          </div>
                          <div className="p-6">
                            <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">{video.title}</h3>
                            {video.description && (
                              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{video.description}</p>
                            )}
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 text-sm rounded-xl font-semibold border border-red-100">
                              <Play className="w-4 h-4" />
                              {video.category}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
});

GalleryPage.displayName = "GalleryPage";

export default GalleryPage;
