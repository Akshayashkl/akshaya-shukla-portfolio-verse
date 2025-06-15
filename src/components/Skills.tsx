
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'EJS', 'RESTful APIs'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      title: 'Programming & AI',
      skills: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${85 + (skillIndex * 3)}%`,
                          animationDelay: `${index * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
