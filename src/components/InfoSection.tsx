import { Check, Plane, Home, Coffee } from "lucide-react";
import starclusterBackground from "@/assets/starcluster-bg.jpg";

const InfoSection = () => {
  const benefits = [
    {
      icon: Check,
      title: "No Registration Fee",
      description: "Free participation for all registered attendees",
      color: "text-primary"
    },
    {
      icon: Plane,
      title: "Travel Support",
      description: "Financial assistance as per IUCAA norms",
      color: "text-secondary"
    },
    {
      icon: Home,
      title: "Free Accommodation",
      description: "Complimentary hostel accommodation for outstation participants",
      color: "text-accent"
    },
    {
      icon: Coffee,
      title: "Local Hospitality",
      description: "Complete food arrangements and local hospitality provided",
      color: "text-primary"
    }
  ];

  return (
    <section id="info" className="py-20 relative overflow-hidden">
      {/* Star Cluster Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${starclusterBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Twinkling stars effect */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-32 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-accent rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-24 right-1/5 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-12 w-1 h-1 bg-secondary rounded-full animate-ping delay-500"></div>
      <div className="absolute top-2/3 right-12 w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Important <span className="bg-gradient-cosmic bg-clip-text text-transparent">Information</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about attending HEAW-2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-cosmic opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-nebula rounded-full flex items-center justify-center cosmic-glow">
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="nebula-card p-8 rounded-3xl">
            <h3 className="text-2xl font-orbitron font-semibold text-primary mb-6">Workshop Coordinators</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Dr. Vaidehi Paliya</p>
                  <p className="text-sm text-muted-foreground">IUCAA, Pune</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Dr. Ashutosh Singh, Dr. Dinesh Chandra Maurya</p>
                  <p className="text-sm text-muted-foreground">GLA University, Mathura</p>
                </div>
              </div>
            </div>
          </div>

          <div className="nebula-card p-8 rounded-3xl">
            <h3 className="text-2xl font-orbitron font-semibold text-primary mb-6">Local Organizing Committee</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Prof. Anirudh Pardhan (CCASS)",
                "Prof. Saibal Ray (CCASS)",
                "Prof. Umesh Sharma (Mathematics)",
                "Prof. Ambuj Kumar Mishra (Mathematics)",
                "Dr. Dharmveer Singh (Physics)"
              ].map((member, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-muted-foreground">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;