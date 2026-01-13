import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyProcIvorSection from "@/components/WhyProcIvorSection";
import ApproachSection from "@/components/ApproachSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import EngagementSection from "@/components/EngagementSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyProcIvorSection />
        <ApproachSection />
        <ExpertiseSection />
        <AboutSection />
        <EngagementSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
