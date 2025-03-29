
import { useEffect } from 'react';
import { Hero, Services, CoursesOverview, InspirationSection, Testimonials, GalleryPreview, CTASection } from '../components/HomePage';
import OurTeam from '../components/OurTeam';
import AdPopup from '../components/AdPopup';
import MarketingPostersSection from '../components/MarketingPostersSection';
import OurStaff from '../components/OurStaff';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      <AdPopup />
      <Hero />
      <Services />
      <CoursesOverview />
      <MarketingPostersSection/>
      <InspirationSection />
      <OurTeam />
      <OurStaff />
      <Testimonials />
      <GalleryPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;
