import TopPage from "@/components/TopPage";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import TopicsSection from "@/components/TopicsSection";
import InfoSection from "@/components/InfoSection";
import ChatSection from "@/components/ChatSection";
import ContactSection from "@/components/ContactSection";
import TravelGuidelines from "@/components/TravelGuidelines";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopPage />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <TopicsSection />
      <InfoSection />
      <TravelGuidelines />
      <ContactSection />
      <Footer />
      <ChatSection />
    </div>
  );
};

export default Index;
