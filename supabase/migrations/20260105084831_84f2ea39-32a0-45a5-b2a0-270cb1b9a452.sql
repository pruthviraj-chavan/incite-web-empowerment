-- Drop existing RESTRICTIVE policies for news
DROP POLICY IF EXISTS "Anyone can view published news" ON public.news;
DROP POLICY IF EXISTS "Admins can manage all news" ON public.news;

-- Recreate as PERMISSIVE policies
CREATE POLICY "Anyone can view published news" 
ON public.news 
FOR SELECT 
TO anon, authenticated
USING (is_published = true);

CREATE POLICY "Admins can manage all news" 
ON public.news 
FOR ALL 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));