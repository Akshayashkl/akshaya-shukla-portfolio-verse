
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Coral Reef Health Detection',
      description: 'ML project to differentiate between healthy and bleached coral reefs using classification techniques. Implements computer vision and machine learning algorithms for environmental monitoring.',
      techStack: ['Python', 'Machine Learning', 'OpenCV', 'Scikit-learn'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'ENDEC',
      description: 'Simple encryption/decryption tool demonstrating basic cybersecurity concepts. Features multiple encryption algorithms and a user-friendly interface for secure data handling.',
      techStack: ['Python', 'Cryptography', 'Tkinter', 'Security'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'AI Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and TypeScript. Features dark theme, smooth animations, and mobile-first design principles.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-400/30">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-2" />
                  <span className="text-sm">Code</span>
                </a>
                <a 
                  href={project.liveUrl}
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 inline-block">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Services</h3>
            <p className="text-gray-300">Offering beginner-level web design services</p>
            <p className="text-gray-400 text-sm mt-2">Landing pages, personal sites, and basic web applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
