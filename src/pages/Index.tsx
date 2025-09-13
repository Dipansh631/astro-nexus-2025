import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import TopicsSection from "@/components/TopicsSection";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <TopicsSection />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
