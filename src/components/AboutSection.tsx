import { GraduationCap, Users, Telescope } from "lucide-react";
import nebulaBackground from "@/assets/nebula-bg.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "For Students & Scholars",
      description: "Designed for UG/PG students and research scholars to explore high energy astrophysics"
    },
    {
      icon: Users,
      title: "Expert Speakers",
      description: "Leading researchers from IUCAA, IISER, and prestigious institutions across India"
    },
    {
      icon: Telescope,
      title: "Space Themed",
      description: "Deep dive into black holes, compact objects, and high-energy phenomena in the universe"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nebulaBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>
      
      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full opacity-80 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full opacity-70 animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary rounded-full opacity-90 animate-pulse delay-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            About the <span className="bg-gradient-cosmic bg-clip-text text-transparent">Workshop</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              IUCAA Centre for Astronomy Research and Development (ICARD), GLA University, Mathura is organizing 
              High Energy Astrophysics Workshop-2025 during November 18-20, 2025.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The purpose of the workshop is to provide opportunities to UG/PG students and Research Scholars 
              to get exposure on current issues in High Energy Astrophysics and its implications in other research areas.
            </p>
            <div className="pt-6">
              <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">Why Attend?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Explore cutting-edge research in high energy astrophysics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Network with leading researchers and fellow scholars
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Gain insights into computational astrophysics methods
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cosmic opacity-20 rounded-3xl blur-xl"></div>
            <div className="relative nebula-card p-8 rounded-3xl">
              <h3 className="text-xl font-orbitron font-semibold text-center mb-8">Workshop Highlights</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-cosmic rounded-xl">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;