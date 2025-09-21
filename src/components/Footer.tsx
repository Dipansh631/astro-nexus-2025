const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/IUCCA_Logo[1].png" 
                  alt="IUCAA Logo" 
                  className="h-10 w-auto"
                />
                <div className="w-px h-8 bg-border/50"></div>
                <img 
                  src="/GLA_University_logo.png" 
                  alt="GLA University Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              High Energy Astrophysics Workshop organized by IUCAA-ICARD, GLA University, Mathura
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Speakers", "Topics", "Registration"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>heaw@gla.ac.in</p>
              <p>CCASS, GLA University, Mathura</p>
              <p>November 18–20, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2025 IUCAA-ICARD, GLA University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;