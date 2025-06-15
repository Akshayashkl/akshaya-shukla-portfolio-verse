
import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a student pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning 
              from Vivekananda Institute of Professional Studies, expected to graduate in 2027.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My core interest lies in integrating full stack development with AI-driven applications, 
              creating innovative solutions that bridge the gap between traditional web development 
              and cutting-edge artificial intelligence.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Bachelor of Technology – AIML</p>
                <p className="text-sm text-gray-400">Vivekananda Institute of Professional Studies</p>
                <p className="text-sm text-gray-400">2023 – 2027</p>
              </div>
            </div>
            
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">InternPro – Web Developer Intern</p>
                <p className="text-sm text-gray-400">
                  Currently working on live projects and gaining hands-on experience 
                  with web development tools and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
