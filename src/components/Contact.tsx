import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'denis.kiprotich@email.com',
      action: 'mailto:denis.kiprotich@email.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+254 700 123 456',
      action: 'tel:+254700123456'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Nairobi, Kenya',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      handle: '@denis-ai',
      url: '#'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      handle: 'Denis Kiprotich',
      url: '#'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      name: 'Discord',
      handle: 'denis_ai#1234',
      url: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's <span className="glow-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects, whether it's building ML models, 
                  developing web applications, or solving complex technical challenges. Drop me a 
                  line and let's make something great together!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="cyber-card group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg text-background group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.title}</h4>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Find me online</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      className="cyber-card group flex items-center space-x-3 hover:border-primary/40 transition-colors duration-300"
                    >
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="cyber-card">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
                  Currently Available
                </h4>
                <p className="text-sm text-muted-foreground">
                  Open for new opportunities and exciting projects. 
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  I respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="cyber-card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Prefer a quick chat?</h3>
              <p className="text-muted-foreground mb-6">
                Sometimes a conversation is better than a long email. 
                Schedule a free 30-minute call to discuss your project.
              </p>
              <Button variant="outline" className="glow-border">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;