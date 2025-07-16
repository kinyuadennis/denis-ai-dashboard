import { Brain, Code, Database, Shield, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'Bash', 'C++', 'Java', 'SQL'],
      color: 'from-neon-purple to-primary'
    },
    {
      title: 'ML & AI',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenCV'],
      color: 'from-neon-blue to-accent'
    },
    {
      title: 'Web & Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Flask', 'FastAPI', 'Django', 'Node.js', 'React', 'HTML/CSS'],
      color: 'from-cyber-green to-accent'
    },
    {
      title: 'DevOps Tools',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'GitHub Actions', 'Linux', 'CI/CD', 'Anaconda', 'Git'],
      color: 'from-primary to-neon-purple'
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      skills: ['Nmap', 'WHOIS', 'Network Security', 'Penetration Testing', 'Threat Analysis'],
      color: 'from-accent to-cyber-green'
    },
    {
      title: 'Deployment',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Render', 'DockerHub', 'GitHub Pages', 'Streamlit', 'Heroku', 'AWS'],
      color: 'from-neon-blue to-primary'
    }
  ];

  const certifications = [
    'Machine Learning Specialization - Coursera',
    'Docker Fundamentals - Linux Academy',
    'Python for Data Science - IBM',
    'Cybersecurity Fundamentals - Cisco',
    'MLOps Engineering - Udacity'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Skills & <span className="glow-text">Tech Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable, and secure solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-background">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < (skillIndex % 3 + 3) ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Timeline */}
          <div className="bg-card/50 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Learning <span className="glow-text">Journey</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
                
                <div className="space-y-8">
                  {[
                    { year: '2020', skill: 'Python Programming', description: 'Started with basic scripting and automation' },
                    { year: '2021', skill: 'Machine Learning', description: 'Dove into scikit-learn and data analysis' },
                    { year: '2022', skill: 'Web Development', description: 'Built full-stack applications with Flask' },
                    { year: '2023', skill: 'Deep Learning & MLOps', description: 'Advanced to TensorFlow, PyTorch, and Docker' },
                    { year: '2024', skill: 'DevSecOps & AI Engineering', description: 'Focusing on security and production systems' }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                        <div className="cyber-card">
                          <div className="text-primary font-bold text-sm mb-1">{item.year}</div>
                          <h4 className="font-semibold mb-2">{item.skill}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className="relative w-full md:w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                      </div>
                      <div className="w-full md:w-5/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">
              Certifications & <span className="glow-text">Learning</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 bg-card border border-primary/20 rounded-lg hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="text-sm font-medium">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;