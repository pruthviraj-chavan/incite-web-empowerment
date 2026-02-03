import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Cache configuration for high traffic
const STALE_TIME = 5 * 60 * 1000; // 5 minutes - data considered fresh
const CACHE_TIME = 30 * 60 * 1000; // 30 minutes - keep in cache

// Gallery images with caching
export function useGalleryImages() {
  return useQuery({
    queryKey: ['gallery-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('id, title, description, image_url, category, created_at')
        .eq('is_active', true)
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

// Gallery videos with caching
export function useGalleryVideos() {
  return useQuery({
    queryKey: ['gallery-videos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_videos')
        .select('id, title, description, youtube_url, thumbnail_url, category, created_at')
        .eq('is_active', true)
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

// Blogs with caching
export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, category, author, published_at, created_at, featured_image')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

// Courses with caching
export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data || [];
    },
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

// Prefetch hook for preloading data
export function usePrefetchData() {
  const queryClient = useQueryClient();

  const prefetchGallery = () => {
    queryClient.prefetchQuery({
      queryKey: ['gallery-images'],
      queryFn: async () => {
        const { data } = await supabase
          .from('gallery_images')
          .select('id, title, description, image_url, category, created_at')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        return data || [];
      },
      staleTime: STALE_TIME,
    });
  };

  const prefetchBlogs = () => {
    queryClient.prefetchQuery({
      queryKey: ['blogs'],
      queryFn: async () => {
        const { data } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, category, author, published_at, created_at, featured_image')
          .eq('is_published', true)
          .order('published_at', { ascending: false });
        return data || [];
      },
      staleTime: STALE_TIME,
    });
  };

  return { prefetchGallery, prefetchBlogs };
}
