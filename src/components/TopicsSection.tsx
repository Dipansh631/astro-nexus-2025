import { Atom, Zap, Globe, Telescope } from "lucide-react";

const TopicsSection = () => {
  const topics = [
    {
      icon: Telescope,
      title: "Introduction to Stars and Black holes",
      description: "Fundamental concepts of stellar evolution and black hole physics",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Atom,
      title: "Current issues in Compact Object Astrophysics",
      description: "Latest research in neutron stars, white dwarfs, and exotic matter",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Zap,
      title: "Computational issues in X-ray & Gamma-ray Astrophysics",
      description: "Advanced computational methods for high-energy astronomy",
      gradient: "from-accent to-primary"
    },
    {
      icon: Globe,
      title: "Physics of Relativistic jets and Blazars",
      description: "Understanding jets from supermassive black holes and their properties",
      gradient: "from-primary via-secondary to-accent"
    }
  ];

  return (
    <section id="topics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Topics to be <span className="bg-gradient-cosmic bg-clip-text text-transparent">Covered</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore cutting-edge research areas in high energy astrophysics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative nebula-card p-8 rounded-3xl h-full">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${topic.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <topic.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className={`h-1 bg-gradient-to-r ${topic.gradient} rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="nebula-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">Workshop Format</h3>
            <p className="text-muted-foreground leading-relaxed">
              The workshop will feature interactive lectures, hands-on computational sessions, 
              and discussion panels. Participants will gain practical experience with modern 
              astrophysical analysis tools and techniques used in high-energy astronomy research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;