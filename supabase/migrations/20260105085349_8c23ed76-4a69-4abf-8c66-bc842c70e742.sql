-- Allow new template types in public.news
ALTER TABLE public.news
  DROP CONSTRAINT IF EXISTS news_template_type_check;

ALTER TABLE public.news
  ADD CONSTRAINT news_template_type_check
  CHECK (
    template_type IN (
      'classic',
      'modern',
      'breaking',
      'featured',
      'gradient',
      'magazine',
      'minimal',
      'neon',
      'corporate',
      'newspaper'
    )
  );