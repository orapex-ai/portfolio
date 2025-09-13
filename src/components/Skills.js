import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, 
  FaJs, 
  FaDatabase, 
  FaBrain, 
  FaServer, 
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { SiFastapi, SiPostgresql, SiOracle, SiOpenai } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
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
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 95 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "SQL", icon: <FaDatabase />, level: 90 },
        { name: "Bash", icon: <FaLinux />, level: 80 }
      ]
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "LLMs & OpenAI", icon: <SiOpenai />, level: 90 },
        { name: "LangChain/LangGraph", icon: <FaBrain />, level: 85 },
        { name: "RAG & Embeddings", icon: <FaBrain />, level: 90 },
        { name: "scikit-learn", icon: <FaBrain />, level: 80 }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: <SiFastapi />, level: 90 },
        { name: "REST APIs", icon: <FaServer />, level: 95 },
        { name: "WebSockets", icon: <FaServer />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 75 }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 90 },
        { name: "Oracle", icon: <SiOracle />, level: 85 },
        { name: "ChromaDB", icon: <FaDatabase />, level: 85 },
        { name: "Vector Stores", icon: <FaDatabase />, level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Linux", icon: <FaLinux />, level: 85 },
        { name: "Docker", icon: <FaDocker />, level: 80 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "CI/CD", icon: <FaServer />, level: 75 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 80 },
        { name: "HTML/CSS", icon: <FaJs />, level: 85 },
        { name: "Responsive Design", icon: <FaReact />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="skills-summary" variants={itemVariants}>
            <h3>Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-item">
                <h4>AI/ML Engineering</h4>
                <p>Building production-ready AI applications with LLMs, RAG, and vector databases</p>
              </div>
              <div className="competency-item">
                <h4>Backend Development</h4>
                <p>Creating scalable APIs and microservices with Python, FastAPI, and modern frameworks</p>
              </div>
              <div className="competency-item">
                <h4>Database Design</h4>
                <p>Designing and optimizing databases for AI applications and high-performance systems</p>
              </div>
              <div className="competency-item">
                <h4>Production Deployment</h4>
                <p>Shipping and maintaining production applications with monitoring and CI/CD</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
