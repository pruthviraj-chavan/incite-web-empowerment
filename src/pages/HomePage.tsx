
import { useEffect, lazy, Suspense } from 'react';
import { Hero, Services, CoursesOverview, InspirationSection, Testimonials, GalleryPreview, CTASection } from '../components/HomePage';
import AdPopup from '../components/AdPopup';

// Lazy load less critical components
const OurTeam = lazy(() => import('../components/OurTeam'));
const MarketingPostersSection = lazy(() => import('../components/MarketingPostersSection'));
const OurStaff = lazy(() => import('../components/OurStaff'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full max-w-4xl h-64"></div>
  </div>
);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Prefetch some components that are likely to be viewed
    const prefetchComponents = async () => {
      const viewportHeight = window.innerHeight;
      const prefetchTimeout = setTimeout(async () => {
        // Only prefetch if user stays on the page
        // No need to prefetch components that are already imported directly
      }, 2000);
      
      return () => clearTimeout(prefetchTimeout);
    };
    
    prefetchComponents();
  }, []);

  return (
    <div className="page-fade-in">
      <AdPopup />
      <Hero />
      <Services />
      <CoursesOverview />
      
      {/* Lazy loaded components */}
      <Suspense fallback={<LoadingFallback />}>
        <MarketingPostersSection />
      </Suspense>
      
      <InspirationSection />
      
      <Suspense fallback={<LoadingFallback />}>
        <OurTeam />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <OurStaff />
      </Suspense>
      
      <Testimonials />
      
      <GalleryPreview />
      
      <CTASection />
    </div>
  );
};

export default HomePage;
