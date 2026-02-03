import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  LogOut,
  BookOpen,
  Menu,
  X,
  Home,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Database,
  HardDrive,
  Server,
  Cpu,
  Activity
} from 'lucide-react';
import GalleryManager from '@/components/admin/GalleryManager';
import VideoManager from '@/components/admin/VideoManager';
import BlogManager from '@/components/admin/BlogManager';
import CoursesManager from '@/components/admin/CoursesManager';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'dashboard' | 'gallery' | 'videos' | 'courses' | 'blogs';

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    images: 0,
    videos: 0,
    blogs: 0,
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
      const [images, videos, blogs, courses] = await Promise.all([
        supabase.from('gallery_images').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_videos').select('id', { count: 'exact', head: true }),
        supabase.from('blogs').select('id', { count: 'exact', head: true }),
        supabase.from('courses').select('id', { count: 'exact', head: true }),
      ]);
      
      setStats({
        images: images.count || 0,
        videos: videos.count || 0,
        blogs: blogs.count || 0,
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

  const menuItems = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: LayoutDashboard, color: 'from-violet-500 to-purple-600' },
    { id: 'gallery' as TabType, label: 'Gallery', icon: ImageIcon, color: 'from-cyan-500 to-blue-600' },
    { id: 'videos' as TabType, label: 'Videos', icon: Video, color: 'from-pink-500 to-rose-600' },
    { id: 'courses' as TabType, label: 'Courses', icon: BookOpen, color: 'from-amber-500 to-orange-600' },
    { id: 'blogs' as TabType, label: 'Blogs', icon: FileText, color: 'from-emerald-500 to-green-600' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  const statsCards = [
    { label: 'Gallery Images', count: stats.images, icon: ImageIcon, color: 'from-cyan-500 to-blue-600', bgColor: 'bg-cyan-500/10' },
    { label: 'Videos', count: stats.videos, icon: Video, color: 'from-pink-500 to-rose-600', bgColor: 'bg-pink-500/10' },
    { label: 'Blog Posts', count: stats.blogs, icon: FileText, color: 'from-emerald-500 to-green-600', bgColor: 'bg-emerald-500/10' },
    { label: 'Courses', count: stats.courses, icon: BookOpen, color: 'from-amber-500 to-orange-600', bgColor: 'bg-amber-500/10' },
  ];

  const systemInfo = [
    { label: 'Database', value: 'PostgreSQL', icon: Database, status: 'Online', color: 'text-emerald-400' },
    { label: 'Storage Buckets', value: '3 Active', icon: HardDrive, status: 'gallery, blogs, news', color: 'text-cyan-400' },
    { label: 'Server', value: 'Supabase', icon: Server, status: 'Connected', color: 'text-purple-400' },
    { label: 'API Status', value: 'Healthy', icon: Activity, status: 'All systems operational', color: 'text-green-400' },
  ];

  const storageStats = [
    { bucket: 'Gallery', used: stats.images, limit: 500, icon: ImageIcon },
    { bucket: 'Videos', used: stats.videos, limit: 100, icon: Video },
    { bucket: 'Blogs', used: stats.blogs, limit: 200, icon: FileText },
    { bucket: 'Courses', used: stats.courses, limit: 50, icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white">Admin Panel</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleSignOut}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-[#0d0d14] border-r border-white/5 z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-white">Admin</span>
                </div>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === item.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                ))}
              </nav>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                  <p className="text-white/50 text-xs mb-1">Logged in as</p>
                  <p className="text-white text-sm font-medium truncate">{user.email}</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 bg-[#0d0d14] border-r border-white/5">
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Admin Panel</h1>
              <p className="text-xs text-white/40">Incite Computers</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                activeTab === item.id
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                activeTab === item.id ? 'bg-white/20' : `bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-100`
              }`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">{item.label}</span>
              {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/5">
          <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/10 mb-4">
            <p className="text-white/40 text-xs mb-1">Logged in as</p>
            <p className="text-white text-sm font-medium truncate">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
              className="flex-1 border-white/10 text-white/70 hover:bg-white/5 hover:text-white bg-transparent"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSignOut}
              className="flex-1 border-red-500/20 text-red-400 hover:bg-red-500/10 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Welcome Section */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Dashboard Overview 📊
                </h2>
                <p className="text-white/50">Monitor your content and system status.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {statsCards.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-[#12121a] rounded-xl p-4 md:p-5 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-0.5">{stat.count}</p>
                    <p className="text-white/40 text-xs md:text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* System Info + Storage Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                {/* System Status */}
                <div className="bg-[#12121a] rounded-xl p-5 md:p-6 border border-white/5">
                  <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    System Status
                  </h3>
                  <div className="space-y-3">
                    {systemInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center`}>
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm font-medium">{item.label}</span>
                            <span className="text-emerald-400 text-xs">● {item.value}</span>
                          </div>
                          <p className="text-white/40 text-xs truncate">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Storage Usage */}
                <div className="bg-[#12121a] rounded-xl p-5 md:p-6 border border-white/5">
                  <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-cyan-400" />
                    Storage Usage
                  </h3>
                  <div className="space-y-4">
                    {storageStats.map((storage) => {
                      const percentage = Math.min((storage.used / storage.limit) * 100, 100);
                      return (
                        <div key={storage.bucket}>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <div className="flex items-center gap-2">
                              <storage.icon className="w-4 h-4 text-white/50" />
                              <span className="text-white/70">{storage.bucket}</span>
                            </div>
                            <span className="text-white font-medium">{storage.used} / {storage.limit}</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all ${
                                percentage > 80 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                                percentage > 50 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                                'bg-gradient-to-r from-emerald-500 to-cyan-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-white/30 text-xs mt-1">{percentage.toFixed(0)}% used</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#12121a] rounded-xl p-5 md:p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {menuItems.filter(item => item.id !== 'dashboard').map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white hover:scale-[1.02] transition-transform flex flex-col items-center gap-2 shadow-lg`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">Manage {item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Database Info */}
              <div className="mt-6 bg-[#12121a] rounded-xl p-5 md:p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  Database Tables
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'gallery_images', count: stats.images },
                    { name: 'gallery_videos', count: stats.videos },
                    { name: 'blogs', count: stats.blogs },
                    { name: 'courses', count: stats.courses },
                  ].map((table) => (
                    <div key={table.name} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <p className="text-white/50 text-xs font-mono mb-1">{table.name}</p>
                      <p className="text-white font-semibold">{table.count} rows</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Content Managers */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <GalleryManager />
            </motion.div>
          )}
          
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <VideoManager />
            </motion.div>
          )}

          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CoursesManager />
            </motion.div>
          )}
          
          {activeTab === 'blogs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BlogManager />
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
