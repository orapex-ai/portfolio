import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
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

  const handleDownloadCV = () => {
    // In a real implementation, you would link to your actual CV file
    window.open('/cv.txt', '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary">Kareem Qasarwah</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
              AI Software Engineer
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Building LLM/RAG-powered applications and intelligent backends at scale. 
              Specialized in Python, AI/ML, and creating production-ready solutions 
              that solve real-world problems.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="btn-icon" />
                Download CV
              </motion.button>
              
              <motion.button 
                className="btn btn-outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-text">KQ</span>
              </div>
              <div className="hero-badge">
                <span className="badge-text">3+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-social"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/kareemqasarwah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/kareemqasarwah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:kareemqasarwah2001@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
