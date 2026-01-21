import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import DefenseSystemVisualization from '@/components/home/DefenseSystemVisualization';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import GlobalPresence from '@/components/home/GlobalPresence';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <DefenseSystemVisualization />
      <FeaturedProducts />
      <GlobalPresence />
      <CTASection />
    </Layout>
  );
};

export default Index;
