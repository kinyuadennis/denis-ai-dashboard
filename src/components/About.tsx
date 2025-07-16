import { Code, Database, Shield, Zap } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Docker', icon: '🐳' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Git', icon: '📝' },
    { name: 'Linux', icon: '🐧' },
    { name: 'PyTorch', icon: '🔥' },
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions from ML models to web applications'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Processing and analyzing large datasets for actionable insights'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Focus',
      description: 'Developing security tools and phishing detection systems'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'MLOps & Automation',
      description: 'Deploying models with Docker and CI/CD pipelines'
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="glow-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Python-savvy Machine Learning Engineer with hands-on experience in real-world systems, 
                blending my love for automation, data, and AI. From building SACCO systems and petrol station 
                dashboards to deploying models via Docker and crafting phishing detection tools — I turn ideas 
                into deployed systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently leveling up in Deep Learning, MLOps, and DevSecOps to become a full-stack AI engineer. 
                My approach combines practical problem-solving with cutting-edge technology to deliver solutions 
                that make a real impact.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-primary">What I Do Best:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Building ML models that solve real business problems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Creating scalable web applications with Python & React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Implementing secure, dockerized deployment pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Developing cybersecurity tools and threat detection systems
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="cyber-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Tech <span className="glow-text">Stack</span>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="cyber-card text-center group cursor-pointer floating-animation"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-xs font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;