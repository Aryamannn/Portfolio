"use client";

import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Image from "next/image";
import { motion } from 'framer-motion';

// Animation configurations
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleUp = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2
    }
  }
};

const profileImageAnimation = {
  initial: { 
    scale: 0.5, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

const socialIconAnimation = {
  initial: { 
    scale: 0 
  },
  animate: { 
    scale: 1 
  },
  hover: { 
    scale: 1.2,
    rotate: 12,
    transition: { 
      duration: 0.2 
    }
  }
};
// Motion Components
const MotionHeading = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const MotionCard = ({ children, index = 0 }) => (
  <motion.div
    variants={scaleUp}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    custom={index}
  >
    {children}
  </motion.div>
);

const MotionSection = ({ children }) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

// Reusable Components
const Section = ({ id, title, children, bgColor = "bg-gray-900/50" }) => (
  <MotionSection>
    <section id={id} className={`py-16 ${bgColor} backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto px-4">
        <MotionHeading>
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">{title}</h2>
        </MotionHeading>
        {children}
      </div>
    </section>
  </MotionSection>
);

const Card = ({ children, className = "", index = 0 }) => (
  <MotionCard index={index}>
    <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700/30 ${className}`}>
      {children}
    </div>
  </MotionCard>
);

// Navigation Component
const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#education", text: "Education" },
    { href: "#skills", text: "Skills" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full z-10 border-b border-gray-700/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-amber-500">
            Aryaman Mishra
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="block py-2 text-gray-300 hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Skills Component
const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQL"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "CI/CD"]
    }
  ];


  return (
    <Section id="skills" title="Skills" bgColor="bg-black/30">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {skillsData.map((category, index) => (
          <Card key={index} index={index}>
            <motion.h3 
              variants={fadeInUp}
              className="text-xl font-semibold mb-4 text-amber-500"
            >
              {category.category}
            </motion.h3>
            <motion.ul 
              variants={staggerContainer}
              className="space-y-2"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  variants={fadeInUp}
                  className="text-gray-300"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

// Education Component
const Education = () => {
  const educationData = [
    {
      school: "California State University at Monterey Bay",
      degree: "BS in Computer Science",
      date: "Expected May 2025",
      gpa: "3.6/4.0"
    },
    {
      school: "Vidyalankar Institute for International Education",
      degree: "B.Tech in Computer Engineering",
      date: "August 2023",
      gpa: "10/10"
    },
    {
      school: "Thakur Polytechnic",
      degree: "Diploma in Computer Science",
      date: "May 2022",
      gpa: "10/10"
    }
  ];

  return (
    <Section id="education" title="Education" bgColor="bg-gray-900/50">
      <div className="grid gap-8 max-w-2xl mx-auto">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <h3 className="font-bold text-lg text-amber-500">{edu.school}</h3>
            <p className="text-gray-300 font-medium">{edu.degree}</p>
            <p className="text-gray-400">{edu.date}</p>
            <p className="text-gray-400">GPA: {edu.gpa}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Experience Component
const Experience = () => {
  const experienceData = [
    {
      title: "Front End Development Intern",
      company: "Morfeed",
      duration: "February 2023 - May 2023",
      achievements: [
        "Improved user experience by developing responsive interfaces",
        "Collaborated with cross-functional teams",
        "Conducted code reviews and optimizations"
      ]
    },
    {
      title: "Mobile Application Development",
      company: "Rely Service",
      duration: "March 2021 - July 2021",
      achievements: [
        "Developed versatile listing platform for houses and services",
        "Created intuitive user interface with dynamic features",
        "Gained experience in UI/UX design and database management"
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience" bgColor="bg-gray-900/50">
      <div className="grid gap-8 max-w-2xl mx-auto">
        {experienceData.map((exp, index) => (
          <Card key={index}>
            <h3 className="font-bold text-lg text-amber-500">{exp.title}</h3>
            <p className="text-gray-300 font-medium">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Projects Component
const Projects = () => {
  const projectsData = [
    {
      title: "PawsConnect",
      description: "A social networking platform for pet owners featuring user-friendly interfaces, advanced search tools, and multilingual support.",
      tags: ["React.js", "API Integration"],
      links: {
        demo: "https://pawsconnect.demo",
        github: "https://github.com/Aryamannn/pawsconnect"
      }
    },
    {
      title: "Library Management System",
      description: "Mobile application for streamlined book management with administrative controls and user-friendly interface.",
      tags: ["Android Studio", "Database"],
      links: {
        demo: "https://library-demo.com",
        github: "https://github.com/Aryamannn/library-management"
      }
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Platform for analyzing Twitter hashtags with sentiment analysis algorithms and visual data representation.",
      tags: ["Data Analysis", "Visualization"],
      links: {
        demo: "https://sentiment-demo.com",
        github: "https://github.com/Aryamannn/sentiment-analysis"
      }
    }
  ];

  return (
    <Section id="projects" title="Projects" bgColor="bg-black/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        {projectsData.map((project, index) => (
          <Card key={index}>
            <h3 className="font-bold text-lg mb-2 text-amber-500">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-amber-500 hover:underline"
              >
                Demo
              </a>
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-amber-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e) => {  // Removed TypeScript event type
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    
    e.currentTarget.reset();
    alert('Message sent! (This is a demo alert)');
  };

  return (
    <div className="min-h-screen text-gray-300 relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-[#1a1f2b] to-gray-900"></div>
      <div className="fixed inset-0 bg-grid opacity-20"></div>
      
      <div className="relative">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <section id="home" className="pt-24 pb-12 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent"></div>
  <div className="relative max-w-4xl mx-auto px-4">
    <div className="flex flex-col items-center">
      <motion.div
        variants={profileImageAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="w-48 h-48 mb-8 rounded-full overflow-hidden shadow-xl border-4 border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-transparent"
      >
        <Image 
          src="/profile.jpg"
          alt="Aryaman Mishra"
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center"
      >
       <motion.h1 
  variants={fadeInUp}
  className="text-4xl md:text-6xl font-bold mb-6"
>
  Hi, I&apos;m <span className="text-amber-500">Aryaman Mishra</span>
</motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Computer Science Student | Full Stack Developer | Problem Solver
        </motion.p>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex justify-center space-x-6"
        >
          {[
            { href: "https://github.com/Aryamannn", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/aryamanmishra/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:mishraaryaman2003@gmail.com", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={index}
              variants={socialIconAnimation}
              whileHover="hover"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              <social.icon className="w-5 h-5" />
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

        <Education />
        <Skills />
        <Experience />
        <Projects />
        
        <Section id="contact" title="Contact Me" bgColor="bg-[#131720]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1E2532] p-8 rounded-lg border border-[#2a2f3d]">
                <h3 className="text-xl font-bold text-amber-500 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, href: "mailto:mishraaryaman2003@gmail.com", text: "mishraaryaman2003@gmail.com" },
                    { icon: Phone, href: "tel:+18317180852", text: "+1 (831) 718 0852" },
                    { icon: Github, href: "https://github.com/Aryamannn", text: "github.com/Aryamannn" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/aryamanmishra/", text: "linkedin.com/in/aryamanmishra" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <contact.icon className="h-5 w-5 text-amber-500" />
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-amber-500 transition-colors">
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Send Message Card */}
              <div className="bg-[#1E2532] p-8 rounded-lg border border-[#2a2f3d]">
                <h3 className="text-xl font-bold text-amber-500 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", type: "text", label: "Name" },
                    { id: "email", type: "email", label: "Email" }
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        className="w-full px-3 py-2 bg-[#131720] border border-[#2a2f3d] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-300"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-[#131720] border border-[#2a2f3d] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-gray-900 py-2 px-4 rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#1E2532] font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-b from-gray-900 to-black py-8 border-t border-gray-800/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-6 mb-4">
                {[
                  { href: "https://github.com/Aryamannn", icon: Github },
                  { href: "https://www.linkedin.com/in/aryamanmishra/", icon: Linkedin },
                  { href: "mailto:mishraaryaman2003@gmail.com", icon: Mail }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400">© {new Date().getFullYear()} Aryaman Mishra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

