import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { number: '3+', label: 'Years Experience', icon: <FaCode /> },
    { number: '10+', label: 'AI Projects', icon: <FaBrain /> },
    { number: '5+', label: 'Production Apps', icon: <FaRocket /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FaUsers /> }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>AI Software Engineer with a Passion for Innovation</h3>
              <p>
                I'm a dedicated AI Software Engineer with 3+ years of experience building 
                LLM/RAG-powered applications and intelligent backends at scale. Based in 
                Jenin, West Bank, Palestine, I specialize in creating production-ready 
                solutions that solve real-world problems.
              </p>
              <p>
                My expertise spans across Python, SQL, REST APIs, and Linux environments. 
                I have a proven track record of shipping production chatbots, real-time 
                translation systems, and data assistants. I'm comfortable with 
                troubleshooting in production, writing clean code, and collaborating 
                across engineering and product teams.
              </p>
              <p>
                I hold a B.Sc. in Computer Systems Engineering from Arab American University 
                (2018-2022) and am fluent in both Arabic (Native) and English (Professional).
              </p>
            </motion.div>
            
            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div className="about-highlights" variants={itemVariants}>
            <h3>What I Do Best</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaBrain />
                </div>
                <div className="highlight-content">
                  <h4>AI/ML Development</h4>
                  <p>Building intelligent applications using LLMs, RAG, embeddings, and vector stores</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaCode />
                </div>
                <div className="highlight-content">
                  <h4>Backend Engineering</h4>
                  <p>Creating scalable APIs, databases, and microservices with Python and FastAPI</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaRocket />
                </div>
                <div className="highlight-content">
                  <h4>Production Deployment</h4>
                  <p>Shipping production-ready applications with CI/CD, monitoring, and DevOps practices</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div className="highlight-content">
                  <h4>Team Collaboration</h4>
                  <p>Working closely with product, data, and engineering teams to deliver exceptional results</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
