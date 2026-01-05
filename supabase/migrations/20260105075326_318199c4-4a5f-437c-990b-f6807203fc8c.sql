-- Create app role enum for admin system
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for secure role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create gallery_images table
CREATE TABLE public.gallery_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active gallery images"
ON public.gallery_images FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage gallery images"
ON public.gallery_images FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create gallery_videos table for YouTube links
CREATE TABLE public.gallery_videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    youtube_url TEXT NOT NULL,
    thumbnail_url TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.gallery_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active gallery videos"
ON public.gallery_videos FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage gallery videos"
ON public.gallery_videos FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create blogs table
CREATE TABLE public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    author TEXT DEFAULT 'Incite Computers',
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blogs"
ON public.blogs FOR SELECT
USING (is_published = true);

CREATE POLICY "Admins can manage all blogs"
ON public.blogs FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create news table with template support
CREATE TABLE public.news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    headline TEXT NOT NULL,
    subheadline TEXT,
    content TEXT NOT NULL,
    image_url TEXT,
    template_type TEXT NOT NULL DEFAULT 'classic' CHECK (template_type IN ('classic', 'modern', 'breaking', 'featured')),
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
ON public.news FOR SELECT
USING (is_published = true);

CREATE POLICY "Admins can manage all news"
ON public.news FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply updated_at triggers
CREATE TRIGGER update_gallery_images_updated_at
BEFORE UPDATE ON public.gallery_images
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_videos_updated_at
BEFORE UPDATE ON public.gallery_videos
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_updated_at
BEFORE UPDATE ON public.news
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('blogs', 'blogs', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('news', 'news', true);

-- Storage policies for gallery bucket
CREATE POLICY "Anyone can view gallery files"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery');

CREATE POLICY "Admins can upload to gallery"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update gallery files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete gallery files"
ON storage.objects FOR DELETE
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for blogs bucket
CREATE POLICY "Anyone can view blogs files"
ON storage.objects FOR SELECT
USING (bucket_id = 'blogs');

CREATE POLICY "Admins can upload to blogs"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blogs' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blogs files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'blogs' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blogs files"
ON storage.objects FOR DELETE
USING (bucket_id = 'blogs' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for news bucket
CREATE POLICY "Anyone can view news files"
ON storage.objects FOR SELECT
USING (bucket_id = 'news');

CREATE POLICY "Admins can upload to news"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'news' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update news files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'news' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete news files"
ON storage.objects FOR DELETE
USING (bucket_id = 'news' AND public.has_role(auth.uid(), 'admin'));