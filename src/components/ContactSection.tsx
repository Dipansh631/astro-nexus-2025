import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import supernovaBackground from "@/assets/supernova-bg.jpg";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "heaw@gla.ac.in",
      action: "mailto:heaw@gla.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "Ashutosh Singh: +91-9628324945\nDinesh Chandra Maurya: +91-8810764934",
      action: "tel:+919628324945"
    },
    {
      icon: MapPin,
      title: "Venue",
      details: "CCASS, GLA University, Mathura",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Supernova Background */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${supernovaBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85"></div>
      </div>
      
      {/* Explosive cosmic energy effects */}
      <div className="absolute top-20 left-1/4 w-10 h-10 bg-gradient-cosmic rounded-full opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-secondary rounded-full opacity-30 animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-16 w-8 h-8 bg-accent rounded-full opacity-25 animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-16 right-1/3 w-4 h-4 bg-primary rounded-full opacity-40 animate-ping" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-cosmic rounded-full opacity-10 animate-spin" style={{ animationDuration: '25s' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Contact <span className="bg-gradient-cosmic bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore the universe of high energy astrophysics? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="nebula-card p-8 rounded-3xl text-center">
              <h3 className="text-3xl font-orbitron font-bold text-primary mb-4">Register Now</h3>
              <p className="text-muted-foreground mb-6">
                Join us for three days of cutting-edge research and learning in high energy astrophysics
              </p>
              <Button 
                variant="cosmic" 
                size="lg" 
                className="font-orbitron text-lg px-8 py-4 pulse-glow w-full"
                onClick={() => window.open("https://forms.gle/NHb58uKEj7m8rdu27", "_blank")}
              >
                Registration Form
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Registration is completely free for all participants
              </p>
            </div>

            <div className="nebula-card p-8 rounded-3xl">
              <h3 className="text-2xl font-orbitron font-semibold text-primary mb-6">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Date:</strong> November 18–20, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Venue:</strong> CCASS, GLA University, Mathura</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Registration:</strong> Free for all participants</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="nebula-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-cosmic rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {contact.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="nebula-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">
              Organized by ICARD, GLA University
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              IUCAA Centre for Astronomy Research and Development (ICARD) at GLA University, Mathura, 
              in collaboration with IUCAA Pune, brings you this unique opportunity to explore the 
              frontiers of high energy astrophysics research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;