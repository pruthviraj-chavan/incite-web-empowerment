import { useEffect, lazy, Suspense, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Services, CoursesOverview, InspirationSection, GalleryPreview, CTASection, TopCategories, EnhancedAbout } from '../components/HomePage';
import { WhyChooseUs, ModernBenefits, StatsShowcase, IntegrationTree, OfficialCoursesLogos } from '../components/sections';

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
    <>
      <Helmet>
        <title>Incite Computers Radhanagari | Best Computer Training Institute in Kolhapur</title>
        <meta name="description" content="Incite Computers - Premier computer training institute in Radhanagari, Kolhapur. MS-CIT, Tally, MKCL, Programming courses. 20+ years experience. Government approved." />
        <link rel="canonical" href="https://incitecomputer.com/" />
        <meta property="og:title" content="Incite Computers - Best Computer Training in Radhanagari" />
        <meta property="og:description" content="Premier computer training institute in Radhanagari. MS-CIT, Tally, Programming courses with placement assistance." />
        <meta property="og:url" content="https://incitecomputer.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <Hero />
      <TopCategories />
      
      {/* Official MKCL Course Logos */}
      <OfficialCoursesLogos />
      
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
    </>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
