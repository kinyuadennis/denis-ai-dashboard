import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import petrolSystem from '@/assets/petrol-system.jpg';
import saccoSystem from '@/assets/sacco-system.jpg';
import phishingDetector from '@/assets/phishing-detector.jpg';
import footballPredictor from '@/assets/football-predictor.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'PhishScanner',
      description: 'ML-powered phishing detection system using Flask and scikit-learn. Analyzes email content and URLs to identify potential threats with 94% accuracy.',
      image: phishingDetector,
      tech: ['Python', 'Flask', 'Scikit-learn', 'NLP', 'Docker'],
      github: '#',
      demo: '#',
      category: 'Machine Learning'
    },
    {
      title: 'Petrol Station Management System',
      description: 'Comprehensive dashboard for Cool Petroleum Products managing fuel inventory, sales tracking, and real-time analytics.',
      image: petrolSystem,
      tech: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js'],
      github: '#',
      demo: '#',
      category: 'Full-Stack'
    },
    {
      title: 'SACCO Financial System',
      description: 'Complete financial management system for Kigumo Travellers SACCO handling member accounts, loans, and transaction processing.',
      image: saccoSystem,
      tech: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
      github: '#',
      demo: '#',
      category: 'Enterprise'
    },
    {
      title: 'Football Match Predictor',
      description: 'XGBoost-based model predicting Premier League match outcomes using historical data and team statistics with time-series analysis.',
      image: footballPredictor,
      tech: ['Python', 'XGBoost', 'Pandas', 'FastAPI', 'Streamlit'],
      github: '#',
      demo: '#',
      category: 'Data Science'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing the intersection of AI, web development, and business solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="cyber-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="glow-border">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="glow-border">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my GitHub for additional projects including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-card border border-primary/20 rounded-lg">
                🔧 Dockerized ML Pipeline
              </span>
              <span className="px-4 py-2 bg-card border border-primary/20 rounded-lg">
                📊 LSTM Time-Series Analyzer
              </span>
              <span className="px-4 py-2 bg-card border border-primary/20 rounded-lg">
                🛡️ Network Security Scanner
              </span>
              <span className="px-4 py-2 bg-card border border-primary/20 rounded-lg">
                🤖 AI Chatbot Framework
              </span>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="glow-border">
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;