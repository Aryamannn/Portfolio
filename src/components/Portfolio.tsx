import React from 'react';
import { useState } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-indigo-600">
              Aryaman Mishra
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-indigo-600">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-indigo-600">About</a>
              <a href="#projects" className="block py-2 text-gray-600 hover:text-indigo-600">Projects</a>
              <a href="#experience" className="block py-2 text-gray-600 hover:text-indigo-600">Experience</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-8 rounded-full overflow-hidden">
              <img 
                src="/api/placeholder/192/192" 
                alt="Aryaman Mishra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-indigo-600">Aryaman Mishra</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Computer Science Student | Full Stack Developer | Problem Solver
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Aryamannn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/aryamanmishra/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  LinkedIn
                </a>
                <a href="mailto:mishraaryaman2003@gmail" className="text-gray-600 hover:text-indigo-600">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">California State University at Monterey Bay</h3>
              <p className="text-indigo-600">BS in Computer Science</p>
              <p className="text-gray-600">Expected May 2025</p>
              <p className="text-gray-600">GPA: 3.6/4.0</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">Vidyalankar Institute for International Education</h3>
              <p className="text-indigo-600">B.Tech in Computer Engineering</p>
              <p className="text-gray-600">August 2023</p>
              <p className="text-gray-600">GPA: 10/10</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">Thakur Polytechnic</h3>
              <p className="text-indigo-600">Diploma in Computer Science</p>
              <p className="text-gray-600">May 2022</p>
              <p className="text-gray-600">GPA: 10/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="grid gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg">Front End Development Intern</h3>
              <p className="text-indigo-600">Morfeed</p>
              <p className="text-gray-600 mb-4">February 2023 - May 2023</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Improved user experience by developing responsive interfaces</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Conducted code reviews and optimizations</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg">Mobile Application Development</h3>
              <p className="text-indigo-600">Rely Service</p>
              <p className="text-gray-600 mb-4">March 2021 - July 2021</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed versatile listing platform for houses and services</li>
                <li>Created intuitive user interface with dynamic features</li>
                <li>Gained experience in UI/UX design and database management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">PawsConnect</h3>
              <p className="text-gray-600 mb-4">A social networking platform for pet owners featuring user-friendly interfaces, advanced search tools, and multilingual support.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">API Integration</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Library Management System</h3>
              <p className="text-gray-600 mb-4">Mobile application for streamlined book management with administrative controls and user-friendly interface.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Android Studio</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Database</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Twitter Sentiment Analysis</h3>
              <p className="text-gray-600 mb-4">Platform for analyzing Twitter hashtags with sentiment analysis algorithms and visual data representation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Data Analysis</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong> mishraaryaman2003@gmail.com
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Aryamannn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/aryamanmishra/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Aryaman Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;