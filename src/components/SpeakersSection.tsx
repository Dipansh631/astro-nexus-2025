import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import galaxyBackground from "@/assets/galaxy-bg.jpg";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Vaidehi Paliya",
      affiliation: "IUCAA, Pune",
      expertise: "High Energy Astrophysics & AGN Physics",
      initials: "VP"
    },
    {
      name: "Dr. Pankaj Kushwaha",
      affiliation: "IISER, Mohali",
      expertise: "Blazars & Relativistic Jets",
      initials: "PK"
    },
    {
      name: "Dr. Chetana Jain",
      affiliation: "Hansraj College, DU, New Delhi",
      expertise: "Stellar Astrophysics",
      initials: "CJ"
    },
    {
      name: "Dr. Dharm Veer Singh",
      affiliation: "GLA University, Mathura",
      expertise: "Compact Object Physics",
      initials: "DS"
    },
    {
      name: "Dr. Akash Garg",
      affiliation: "IUCAA, Pune",
      expertise: "Computational Astrophysics",
      initials: "AG"
    }
  ];

  return (
    <section id="speakers" className="py-20 relative overflow-hidden">
      {/* Galaxy Background */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${galaxyBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Animated cosmic particles */}
      <div className="absolute top-10 left-1/4 w-6 h-6 bg-gradient-cosmic rounded-full opacity-40 floating"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-secondary rounded-full opacity-60 floating delay-1000"></div>
      <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-accent rounded-full opacity-50 floating delay-2000"></div>
      <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-primary rounded-full opacity-80 floating delay-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Our Distinguished <span className="bg-gradient-cosmic bg-clip-text text-transparent">Speakers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from leading experts in high energy astrophysics and computational methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="nebula-card border-0 overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-cosmic opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Avatar className="w-24 h-24 mx-auto relative">
                    <AvatarFallback className="text-2xl font-orbitron font-bold bg-gradient-cosmic text-primary-foreground">
                      {speaker.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-orbitron font-semibold text-foreground mb-2">
                  {speaker.name}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {speaker.affiliation}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {speaker.expertise}
                </p>
                
                <div className="mt-6 h-px bg-gradient-cosmic opacity-50"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            More distinguished speakers will be announced soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;