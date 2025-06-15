
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const skills = [
    'Web Developer',
    'AI & ML Explorer', 
    'Problem Solver',
    'Full Stack Enthusiast'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentSkill = skills[currentIndex];
      if (charIndex < currentSkill.length) {
        setCurrentText(currentSkill.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex((currentIndex + 1) % skills.length);
          setCurrentText('');
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [charIndex, currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src="https://i.postimg.cc/FFdfvnRn/PASSPORTSIZEPHOTO-2.jpg"
                alt="Akshaya Shukla profile"
                className="w-full h-full object-cover rounded-full"
                style={{
                  background: 'black'
                }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Akshaya
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          A future-ready full stack & AI enthusiast
        </p>
        
        <div className="text-lg md:text-xl text-blue-400 font-mono mb-12 h-8">
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default Hero;

