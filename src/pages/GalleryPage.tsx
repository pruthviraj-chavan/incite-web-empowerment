import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Image as ImageIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

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
const staticImages: Record<string, { id: number; src: string; title: string; date: string; views: number }[]> = {
  lab: [
    { id: 1, src: "/img-03.jpg", title: "Modern Computer Lab", date: "June 15, 2023", views: 245 },
    { id: 2, src: "/img-11.jpg", title: "Student Training Session", date: "July 22, 2023", views: 189 },
    { id: 3, src: "/img-12.jpg", title: "Programming Class", date: "August 5, 2023", views: 210 }
  ],
  hall: [
    { id: 1, src: "/img-08.jpg", title: "Main Lecture Hall", date: "May 10, 2023", views: 178 },
    { id: 2, src: "/img-04.jpg", title: "Interactive Session", date: "June 28, 2023", views: 156 },
    { id: 3, src: "/img-03.jpg", title: "Certification Ceremony", date: "September 15, 2023", views: 232 }
  ],
  office: [
    { id: 1, src: "/img-06.jpg", title: "Administrative Office", date: "April 20, 2023", views: 145 },
    { id: 2, src: "/img-05.jpg", title: "Planning Meeting", date: "July 12, 2023", views: 132 },
    { id: 3, src: "/img-03.jpg", title: "Staff Meeting", date: "August 25, 2023", views: 167 }
  ],
  reception: [
    { id: 1, src: "/img-06.jpg", title: "Reception Area", date: "March 15, 2023", views: 187 },
    { id: 2, src: "/img-07.jpg", title: "Student Inquiry", date: "May 22, 2023", views: 154 },
    { id: 3, src: "/img-03.jpg", title: "Welcome Desk", date: "July 5, 2023", views: 176 }
  ],
  seminar: [
    { id: 1, src: "/img-14.jpg", title: "Career Guidance Seminar", date: "April 10, 2023", views: 211 },
    { id: 2, src: "/img-13.jpg", title: "Industry Expert Session", date: "June 18, 2023", views: 189 },
    { id: 3, src: "/img-15.jpg", title: "Technology Workshop", date: "August 20, 2023", views: 230 }
  ],
  placement: [
    { id: 1, src: "/img-03.jpg", title: "Interview Preparation", date: "May 15, 2023", views: 178 },
    { id: 2, src: "/img-02.jpg", title: "Campus Recruitment", date: "July 25, 2023", views: 203 },
    { id: 3, src: "/img-01.jpg", title: "Job Fair", date: "September 8, 2023", views: 245 }
  ],
  lectures: [
    { id: 1, src: "/img-16.jpg", title: "Industry Expert Talk", date: "April 22, 2023", views: 167 },
    { id: 2, src: "/img-12.jpg", title: "Tech Trends Lecture", date: "June 15, 2023", views: 193 },
    { id: 3, src: "/img-11.jpg", title: "Guest Speaker", date: "August 10, 2023", views: 215 }
  ],
  activities: [
    { id: 1, src: "/img-01.jpg", title: "Group Project", date: "May 18, 2023", views: 178 },
    { id: 2, src: "/img-02.jpg", title: "Coding Competition", date: "July 7, 2023", views: 210 },
    { id: 3, src: "/img-03.jpg", title: "Tech Quiz", date: "August 25, 2023", views: 186 }
  ],
  advertisements: [
    { id: 1, src: "/m1.jpeg", title: "नवीन बॅच - २०२३", date: "जानेवारी १०, २०२३", views: 320 },
    { id: 2, src: "/m2.jpeg", title: "एमएस-सीआयटी प्रवेश सुरू", date: "एप्रिल ५, २०२३", views: 285 },
    { id: 3, src: "/m3.jpeg", title: "गणेशोत्सव स्पेशल ऑफर", date: "सप्टेंबर १, २०२३", views: 310 },
    { id: 4, src: "/m4.jpeg", title: "दिवाळी धमाका ऑफर", date: "ऑक्टोबर २०, २०२३", views: 345 },
    { id: 5, src: "/m5.jpeg", title: "उन्हाळी विशेष बॅच", date: "मे २, २०२३", views: 275 },
    { id: 6, src: "/m1.jpeg", title: "टॅली विशेष प्रशिक्षण", date: "फेब्रुवारी १५, २०२३", views: 265 }
  ]
};

const GalleryPage = memo(() => {
  const [selectedTab, setSelectedTab] = useState("images");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [dbImages, setDbImages] = useState<GalleryImage[]>([]);
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const galleryCategories = [
    { id: "general", name: "General" },
    { id: "lab", name: "Computer Lab" },
    { id: "hall", name: "Lecture Hall" },
    { id: "office", name: "Office Area" },
    { id: "reception", name: "Reception" },
    { id: "seminar", name: "Seminar Sessions" },
    { id: "placement", name: "Placement Area" },
    { id: "lectures", name: "Guest Lectures" },
    { id: "activities", name: "Student Activities" },
    { id: "advertisements", name: "आमच्या जाहिराती" }
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
        title: img.title,
        date: new Date(img.created_at).toLocaleDateString(),
        views: Math.floor(Math.random() * 200) + 100,
        isFromDb: true
      })),
      ...staticImgs.map(img => ({ ...img, id: `static-${img.id}`, isFromDb: false }))
    ];
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Incite Computers Radhanagari - Photos & Videos</title>
        <meta name="description" content="Explore our gallery featuring computer labs, lecture halls, student activities, seminars and more at Incite Computers Radhanagari. Best computer training institute in Kolhapur district." />
        <meta property="og:title" content="Incite Computers Radhanagari - Gallery" />
        <meta property="og:description" content="View our modern computer labs, training sessions, and student activities. 20+ years of excellence in computer education in Radhanagari, Kolhapur." />
        <meta property="og:image" content="/img-03.jpg" />
        <meta property="og:url" content="https://incitecomputer.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Incite Computers Radhanagari" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Incite Computers Radhanagari - Gallery" />
        <meta name="twitter:description" content="View our modern computer labs, training sessions, and student activities." />
        <meta name="twitter:image" content="/img-03.jpg" />
        <link rel="canonical" href="https://incitecomputer.com/gallery" />
      </Helmet>
      <div className="page-fade-in pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-white/30">
              📸 Visual Journey Through Our Institute
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              आमची <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">गॅलरी</span>
            </h1>
            
            <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 mx-auto mb-4 md:mb-6 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed px-4">
              आमच्या संस्थेचा, सुविधांचा आणि विद्यार्थी उपक्रमांचा दृश्य आढावा घ्या
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabs - Images / Videos */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="images" onValueChange={setSelectedTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-1">
                <TabsTrigger 
                  value="images" 
                  className="px-8 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white font-semibold"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Photos
                </TabsTrigger>
                <TabsTrigger 
                  value="videos" 
                  className="px-8 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Images Tab */}
            <TabsContent value="images">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                {galleryCategories.map((category) => (
                  <button 
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      selectedCategory === category.id 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl' 
                        : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {getCategoryImages(selectedCategory).map((image) => (
                  <div
                    key={image.id}
                    className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                  >
                    <div className="relative h-48 md:h-72 overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                        👁 {image.views}
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                          🔍
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                        <span className="flex items-center">📅 {image.date}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                          {image.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              {loading ? (
                <div className="flex justify-center py-20">
                  <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : videos.length === 0 ? (
                <div className="text-center py-20">
                  <Play className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500 text-lg">No videos uploaded yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => {
                    const videoId = extractVideoId(video.youtube_url);
                    const isPlaying = playingVideo === video.id;
                    
                    return (
                      <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <button 
                                onClick={() => setPlayingVideo(video.id)}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                              >
                                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                              </button>
                            </>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                          {video.description && (
                            <p className="text-sm text-gray-500 line-clamp-2">{video.description}</p>
                          )}
                          <span className="inline-block mt-2 px-2 py-1 bg-red-50 text-red-600 text-xs rounded-full font-medium">
                            {video.category}
                          </span>
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
      </div>
    </>
  );
});

GalleryPage.displayName = "GalleryPage";

export default GalleryPage;
