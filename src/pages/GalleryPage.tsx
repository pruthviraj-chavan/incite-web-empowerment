import { useState, useMemo, memo, useCallback } from 'react';
import { useGalleryImages, useGalleryVideos } from '@/hooks/useOptimizedQuery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Image as ImageIcon, Camera, Sparkles, Grid3X3 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import OptimizedGrid from '@/components/ui/OptimizedGrid';
import LazyImage from '@/components/ui/LazyImage';

// Static images that are already in the project
const staticImages: Record<string, { id: number; src: string }[]> = {
  lab: [
    { id: 1, src: "/img-03.jpg" },
    { id: 2, src: "/img-11.jpg" },
    { id: 3, src: "/img-12.jpg" }
  ],
  hall: [
    { id: 1, src: "/img-08.jpg" },
    { id: 2, src: "/img-04.jpg" },
    { id: 3, src: "/img-03.jpg" }
  ],
  office: [
    { id: 1, src: "/img-06.jpg" },
    { id: 2, src: "/img-05.jpg" },
    { id: 3, src: "/img-03.jpg" }
  ],
  reception: [
    { id: 1, src: "/img-06.jpg" },
    { id: 2, src: "/img-07.jpg" },
    { id: 3, src: "/img-03.jpg" }
  ],
  seminar: [
    { id: 1, src: "/img-14.jpg" },
    { id: 2, src: "/img-13.jpg" },
    { id: 3, src: "/img-15.jpg" }
  ],
  placement: [
    { id: 1, src: "/img-03.jpg" },
    { id: 2, src: "/img-02.jpg" },
    { id: 3, src: "/img-01.jpg" }
  ],
  lectures: [
    { id: 1, src: "/img-16.jpg" },
    { id: 2, src: "/img-12.jpg" },
    { id: 3, src: "/img-11.jpg" }
  ],
  activities: [
    { id: 1, src: "/img-01.jpg" },
    { id: 2, src: "/img-02.jpg" },
    { id: 3, src: "/img-03.jpg" }
  ],
  advertisements: [
    { id: 1, src: "/m1.jpeg" },
    { id: 2, src: "/m2.jpeg" },
    { id: 3, src: "/m3.jpeg" },
    { id: 4, src: "/m4.jpeg" },
    { id: 5, src: "/m5.jpeg" },
    { id: 6, src: "/m1.jpeg" }
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

// Stats data
const stats = [
  { icon: Camera, label: "Photos", value: "500+" },
  { icon: Play, label: "Videos", value: "50+" },
  { icon: Grid3X3, label: "Categories", value: "10" },
];

const GalleryPage = memo(() => {
  const [selectedTab, setSelectedTab] = useState("images");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use optimized cached queries - data stays fresh for 5 mins
  const { data: dbImages = [], isLoading: imagesLoading } = useGalleryImages();
  const { data: videos = [], isLoading: videosLoading } = useGalleryVideos();

  const extractVideoId = useCallback((url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }, []);

  // Memoized category images for OptimizedGrid
  const categoryImages = useMemo(() => {
    const staticImgs = staticImages[selectedCategory] || [];
    const dbImgs = dbImages.filter(img => img.category === selectedCategory);
    
    return [
      ...dbImgs.map(img => ({
        id: img.id,
        src: img.image_url,
        title: img.title
      })),
      ...staticImgs.map(img => ({ 
        id: `static-${img.id}`, 
        src: img.src,
        title: `Gallery image`
      }))
    ];
  }, [dbImages, selectedCategory]);

  const handleImageClick = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery | Incite Computers Radhanagari - Photos & Videos</title>
        <meta name="description" content="Explore our gallery featuring computer labs, lecture halls, student activities, seminars and more at Incite Computers Radhanagari." />
        <link rel="canonical" href="https://incitecomputer.com/gallery" />
      </Helmet>

      <div className="page-fade-in">
        {/* Hero Section - Simplified for performance */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
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
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
                {/* Category Pills */}
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

                {/* Loading State */}
                {imagesLoading ? (
                  <div className="flex justify-center py-20">
                    <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : categoryImages.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Camera className="w-12 h-12 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-lg">No images in this category yet</p>
                  </div>
                ) : (
                  <OptimizedGrid 
                    images={categoryImages}
                    onImageClick={handleImageClick}
                    initialLoadCount={12}
                    loadMoreCount={8}
                  />
                )}
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                {videosLoading ? (
                  <div className="flex justify-center py-20">
                    <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : videos.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-lg">No videos uploaded yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => {
                      const videoId = extractVideoId(video.youtube_url);
                      const isPlaying = playingVideo === video.id;
                      
                      return (
                        <div 
                          key={video.id}
                          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                          <div className="relative aspect-video overflow-hidden">
                            {isPlaying ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <>
                                <LazyImage
                                  src={video.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                  alt={video.title}
                                  className="w-full h-full"
                                />
                                <button 
                                  onClick={() => setPlayingVideo(video.id)}
                                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent"
                                >
                                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                  </div>
                                </button>
                              </>
                            )}
                          </div>
                          <div className="p-5">
                            <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">{video.title}</h3>
                            {video.description && (
                              <p className="text-gray-500 text-sm line-clamp-2">{video.description}</p>
                            )}
                          </div>
                        </div>
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
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <img 
              src={selectedImage} 
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </>
  );
});

GalleryPage.displayName = "GalleryPage";

export default GalleryPage;
