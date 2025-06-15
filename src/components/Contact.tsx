
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akshaya09517711623@gmail.com',
      href: 'mailto:akshaya09517711623@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akshaya-shukla-24a082332',
      href: 'https://linkedin.com/in/akshaya-shukla-24a082332'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Akshayashkl',
      href: 'https://github.com/Akshayashkl'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8090890894',
      href: 'tel:+918090890894'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <IconComponent className="text-blue-400 mr-4 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                    <div>
                      <p className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{link.label}</p>
                      <p className="text-gray-400 text-sm">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          © 2024 Akshaya Shukla. Built with React & TypeScript.
        </p>
      </div>
    </section>
  );
};

export default Contact;
