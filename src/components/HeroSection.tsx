import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/space-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Animated Stars Background */}
      <div className="absolute inset-0 starfield-bg opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="floating">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-foreground mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              High Energy Astrophysics
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Workshop 2025</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Organized by IUCAA Centre for Astronomy Research and Development (ICARD), GLA University, Mathura
        </p>

        {/* Event Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="nebula-card p-6 rounded-2xl text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-orbitron font-semibold text-lg mb-2">Date</h3>
            <p className="text-muted-foreground">November 18–20, 2025</p>
          </div>
          
          <div className="nebula-card p-6 rounded-2xl text-center">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-orbitron font-semibold text-lg mb-2">Venue</h3>
            <p className="text-muted-foreground">CCASS, GLA University, Mathura</p>
          </div>
          
          <div className="nebula-card p-6 rounded-2xl text-center">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-orbitron font-semibold text-lg mb-2">Registration</h3>
            <p className="text-muted-foreground">Free for All</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cosmic" 
            size="lg" 
            onClick={scrollToContact}
            className="font-orbitron text-lg px-8 py-4 pulse-glow"
          >
            Register Now
          </Button>
          
          <Button 
            variant="nebula" 
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="font-orbitron text-lg px-8 py-4"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;