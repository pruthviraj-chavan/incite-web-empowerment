
import { useEffect, lazy, Suspense } from 'react';
import { Hero, Services, CoursesOverview, InspirationSection, Testimonials, GalleryPreview, CTASection } from '../components/HomePage';
import AdPopup from '../components/AdPopup';

// Lazy load less critical components
const OurTeam = lazy(() => import('../components/OurTeam'));
const MarketingPostersSection = lazy(() => import('../components/MarketingPostersSection'));
const OurStaff = lazy(() => import('../components/OurStaff'));

// Simplified loading fallback
const LoadingFallback = () => (
  <div className="w-full py-6 flex justify-center">
    <div className="bg-gray-100 rounded-lg w-full max-w-4xl h-32"></div>
  </div>
);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
