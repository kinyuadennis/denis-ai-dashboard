import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Cool Petroleum Products',
      position: 'Systems Developer',
      period: '2023 - Present',
      location: 'Nairobi, Kenya',
      type: 'Contract',
      description: 'Developed comprehensive petrol station management system handling inventory, sales tracking, and real-time analytics.',
      achievements: [
        'Built automated fuel inventory tracking system reducing manual errors by 85%',
        'Implemented real-time sales dashboard with predictive analytics',
        'Deployed secure payment processing system handling 1000+ daily transactions',
        'Created mobile-responsive interface for field staff operations'
      ],
      tech: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js', 'Docker']
    },
    {
      company: 'Kigumo Travellers SACCO',
      position: 'Financial Systems Developer',
      period: '2022 - 2023',
      location: 'Murang\'a, Kenya',
      type: 'Freelance',
      description: 'Designed and implemented complete financial management system for SACCO operations including member management and loan processing.',
      achievements: [
        'Automated loan calculation and approval workflow saving 40+ hours weekly',
        'Built member portal with real-time account access and transaction history',
        'Implemented secure audit trails and compliance reporting features',
        'Integrated mobile money payments reducing processing time by 60%'
      ],
      tech: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker', 'Celery']
    },
    {
      company: 'Murang\'a County Government',
      position: 'IT Support Specialist',
      period: '2021 - 2022',
      location: 'Murang\'a, Kenya',
      type: 'Full-time',
      description: 'Provided technical support and system administration for county government IT infrastructure.',
      achievements: [
        'Maintained 99.5% system uptime across 50+ workstations and servers',
        'Automated backup procedures reducing data loss incidents to zero',
        'Trained 100+ staff members on new digital systems and security protocols',
        'Implemented cybersecurity measures preventing 15+ potential security breaches'
      ],
      tech: ['Windows Server', 'Linux', 'Network Administration', 'PowerShell', 'Active Directory']
    }
  ];

  const freelanceProjects = [
    {
      project: 'PhishScanner ML System',
      client: 'Security Consultancy',
      description: 'ML-powered phishing detection system with 94% accuracy rate',
      impact: 'Prevented 500+ phishing attempts in first month'
    },
    {
      project: 'Football Prediction API',
      client: 'Sports Analytics Startup',
      description: 'XGBoost model predicting Premier League match outcomes',
      impact: '78% prediction accuracy across 100+ matches'
    },
    {
      project: 'Inventory Management System',
      client: 'Local Retail Chain',
      description: 'Automated inventory tracking and reorder system',
      impact: 'Reduced stockouts by 45% and overstock by 30%'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional <span className="glow-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world impact through innovative solutions and technical excellence
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="cyber-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>
                    <h4 className="text-lg text-primary font-semibold mb-2">{exp.position}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 mt-2">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-primary">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Freelance Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Notable <span className="glow-text">Freelance Projects</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {freelanceProjects.map((project, index) => (
                <div 
                  key={index}
                  className="cyber-card text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.project}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                  <p className="text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-accent font-medium">📈 {project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="cyber-card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and create innovative solutions. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 neon-glow">
                  Start a Project
                </button>
                <button className="px-6 py-3 border border-primary/30 text-primary font-semibold rounded-lg hover:border-primary/50 transition-colors duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;