import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Newspaper, 
  LogOut,
  BookOpen
} from 'lucide-react';
import GalleryManager from '@/components/admin/GalleryManager';
import VideoManager from '@/components/admin/VideoManager';
import BlogManager from '@/components/admin/BlogManager';
import NewsManager from '@/components/admin/NewsManager';
import CoursesManager from '@/components/admin/CoursesManager';

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stats, setStats] = useState({
    images: 0,
    videos: 0,
    blogs: 0,
    news: 0,
    courses: 0
  });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      toast({
        title: "Access Denied",
        description: "You must be an admin to access this page.",
        variant: "destructive",
      });
      navigate('/admin/login');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    const fetchStats = async () => {
      const [images, videos, blogs, news, courses] = await Promise.all([
        supabase.from('gallery_images').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_videos').select('id', { count: 'exact', head: true }),
        supabase.from('blogs').select('id', { count: 'exact', head: true }),
        supabase.from('news').select('id', { count: 'exact', head: true }),
        supabase.from('courses').select('id', { count: 'exact', head: true }),
      ]);
      
      setStats({
        images: images.count || 0,
        videos: videos.count || 0,
        blogs: blogs.count || 0,
        news: news.count || 0,
        courses: courses.count || 0
      });
    };
    
    if (user && isAdmin) {
      fetchStats();
    }
  }, [user, isAdmin]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-xs text-gray-400">Incite Computers</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{user.email}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSignOut}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Gallery Images', count: stats.images, icon: ImageIcon, color: 'from-blue-500 to-cyan-500' },
            { label: 'Videos', count: stats.videos, icon: Video, color: 'from-purple-500 to-pink-500' },
            { label: 'Blog Posts', count: stats.blogs, icon: FileText, color: 'from-orange-500 to-red-500' },
            { label: 'News Articles', count: stats.news, icon: Newspaper, color: 'from-green-500 to-teal-500' },
            { label: 'Courses', count: stats.courses, icon: BookOpen, color: 'from-indigo-500 to-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.count}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="bg-white/5 border border-white/10 p-1 mb-6 flex-wrap">
            <TabsTrigger value="gallery" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 text-white">
              <ImageIcon className="w-4 h-4 mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 text-white">
              <Video className="w-4 h-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="blogs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Blogs
            </TabsTrigger>
            <TabsTrigger value="news" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 text-white">
              <Newspaper className="w-4 h-4 mr-2" />
              News
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>
          
          <TabsContent value="videos">
            <VideoManager />
          </TabsContent>

          <TabsContent value="courses">
            <CoursesManager />
          </TabsContent>
          
          <TabsContent value="blogs">
            <BlogManager />
          </TabsContent>
          
          <TabsContent value="news">
            <NewsManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
