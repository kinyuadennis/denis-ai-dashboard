import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:denis.kiprotich@email.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold glow-text mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                Denis.AI
              </button>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Machine Learning Engineer passionate about building intelligent systems 
                that solve real-world problems. Turning data into insights and ideas into reality.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300 block">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-primary">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a 
                    href="mailto:denis.kiprotich@email.com"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    denis.kiprotich@email.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground">Nairobi, Kenya</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Availability</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                    <span className="text-foreground">Open for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span>© {currentYear} Denis Kiprotich. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>using React & TailwindCSS</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <button 
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Tech Badge */}
        <div className="text-center py-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground/70 font-mono">
            # Built with React + TypeScript + TailwindCSS + Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;