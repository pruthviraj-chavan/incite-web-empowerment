-- Delete duplicate gallery images (keep only the newest one for each title)
DELETE FROM gallery_images
WHERE id IN (
  SELECT id FROM (
    SELECT id,
      ROW_NUMBER() OVER (PARTITION BY title ORDER BY created_at DESC) as rn
    FROM gallery_images
  ) duplicates
  WHERE rn > 1
);