import { useEffect, lazy, Suspense, memo } from 'react';
import { Hero, Services, CoursesOverview, InspirationSection, GalleryPreview, CTASection, TopCategories, EnhancedAbout } from '../components/HomePage';
import { WhyChooseUs, ModernBenefits, StatsShowcase, IntegrationTree } from '../components/sections';

// Lazy load less critical components
const OurTeam = lazy(() => import('../components/OurTeam'));
const MarketingPostersSection = lazy(() => import('../components/MarketingPostersSection'));
const OurStaff = lazy(() => import('../components/OurStaff'));
const TestimonialsGrid = lazy(() => import('../components/sections/TestimonialsGrid'));

// Simplified loading fallback
const LoadingFallback = memo(() => (
  <div className="w-full py-6 flex justify-center">
    <div className="bg-gray-100 rounded-lg w-full max-w-4xl h-32 animate-pulse"></div>
  </div>
));

LoadingFallback.displayName = "LoadingFallback";

const HomePage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <TopCategories />
      
      {/* Modern dark sections inspired by reference */}
      <ModernBenefits />
      <StatsShowcase />
      
      <Services />
      <CoursesOverview />
      
      {/* Integration tree section */}
      <IntegrationTree />
      
      <WhyChooseUs />
      <EnhancedAbout />
      
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
      
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsGrid />
      </Suspense>
      
      <GalleryPreview />
      
      <CTASection />
    </div>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
