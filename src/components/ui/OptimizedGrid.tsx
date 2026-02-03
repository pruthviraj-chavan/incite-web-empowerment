import { memo, useMemo, useState, useCallback } from 'react';
import LazyImage from './LazyImage';
import { LayoutGrid } from 'lucide-react';

interface GridImage {
  id: string | number;
  src: string;
  title?: string;
}

interface OptimizedGridProps {
  images: GridImage[];
  onImageClick?: (src: string) => void;
  initialLoadCount?: number;
  loadMoreCount?: number;
}

// Virtualized-like grid that loads images in batches
const OptimizedGrid = memo(({ 
  images, 
  onImageClick, 
  initialLoadCount = 12,
  loadMoreCount = 8 
}: OptimizedGridProps) => {
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);

  const visibleImages = useMemo(() => 
    images.slice(0, visibleCount), 
    [images, visibleCount]
  );

  const hasMore = visibleCount < images.length;

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + loadMoreCount, images.length));
  }, [images.length, loadMoreCount]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {visibleImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer"
            onClick={() => onImageClick?.(image.src)}
          >
            <LazyImage
              src={image.src}
              alt={image.title || 'Gallery image'}
              className="w-full h-full"
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

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Load More ({images.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
});

OptimizedGrid.displayName = 'OptimizedGrid';

export default OptimizedGrid;
