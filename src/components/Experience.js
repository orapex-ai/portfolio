import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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

  const experience = {
    company: "ARXOS",
    position: "AI Software Engineer",
    duration: "2022 – Present",
    location: "Remote",
    description: "Built multiple LLM/RAG-native applications end-to-end (design → development → deployment), partnering with product, data, and backend teams.",
    achievements: [
      {
        title: "Qur'an Interpretation Assistant",
        description: "Implemented using RAG over curated tafsir content plus learning-to-rank model to improve retrieval answer quality",
        technologies: ["Arabic NLP", "RAG", "Cross-encoder reranking", "ChromaDB"],
        impact: "Handled Arabic NLP challenges (diacritics, variants, query normalization)"
      },
      {
        title: "Database ChartBot",
        description: "Natural-language SQL generation with guardrails, returning tables or charts automatically",
        technologies: ["LangChain", "Schema-aware prompting", "RAG", "PostgreSQL"],
        impact: "Enabled non-technical staff to self-serve analytics via NL → SQL → chart workflow"
      },
      {
        title: "Agentic Survey-Filling Chatbot",
        description: "Conversational agent that interviews users and populates structured forms",
        technologies: ["LangChain", "Slot-filling", "Validation", "API Integration"],
        impact: "Automated form completion with clarification loops and validation"
      },
      {
        title: "WhatsApp AI Restaurant Bot",
        description: "Chatbot for restaurant chain handling customer queries, orders, and status updates",
        technologies: ["WhatsApp Business API", "Intent Recognition", "Order Management"],
        impact: "Reduced manual order-intake effort by moving to conversational ordering"
      },
      {
        title: "Real-time Sermon Translation",
        description: "Speech-to-speech translation pipeline (Arabic - EN/UR/etc.) with ≤3s latency",
        technologies: ["STT", "MT", "TTS", "WebSockets", "Sign-language PoC"],
        impact: "Enabled real-time multilingual accessibility for religious services"
      },
      {
        title: "Smart Contract Manager",
        description: "Email ingestion system matching contracts against policies, detecting conflicts",
        technologies: ["Email Processing", "RAG", "Vector Stores", "Risk Detection"],
        impact: "Automated contract analysis and risk assessment for legal teams"
      },
      {
        title: "Automotive Dealer Platform",
        description: "Large-scale platform for US automotive dealers with AI-powered negotiation",
        technologies: ["AI Agents", "Inventory Management", "Credit Scoring", "Scheduling"],
        impact: "Automated dealer operations with handoff to dealer without human ops"
      }
    ]
  };

  const education = {
    degree: "B.Sc. Computer Systems Engineering",
    institution: "Arab American University",
    duration: "2018 – 2022",
    location: "Jenin, West Bank, Palestine"
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience & Education
          </motion.h2>
          
          <div className="experience-timeline">
            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="position-title">{experience.position}</h3>
                  <div className="company-info">
                    <span className="company-name">{experience.company}</span>
                    <div className="timeline-meta">
                      <span className="duration">
                        <FaCalendarAlt /> {experience.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="timeline-description">{experience.description}</p>
                
                <div className="achievements-grid">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="achievement-card"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="achievement-header">
                        <h4 className="achievement-title">{achievement.title}</h4>
                      </div>
                      <p className="achievement-description">{achievement.description}</p>
                      <div className="achievement-technologies">
                        {achievement.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="achievement-impact">
                        <strong>Impact:</strong> {achievement.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker education">
                <FaCode />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="position-title">{education.degree}</h3>
                  <div className="company-info">
                    <span className="company-name">{education.institution}</span>
                    <div className="timeline-meta">
                      <span className="duration">
                        <FaCalendarAlt /> {education.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {education.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="experience-summary" variants={itemVariants}>
            <h3>Key Achievements</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <FaBrain />
                </div>
                <div className="summary-content">
                  <h4>AI Innovation</h4>
                  <p>Built 10+ production AI applications using cutting-edge LLM and RAG technologies</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <FaRocket />
                </div>
                <div className="summary-content">
                  <h4>Production Scale</h4>
                  <p>Shipped multiple applications serving real users with high availability and performance</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <FaCode />
                </div>
                <div className="summary-content">
                  <h4>Technical Leadership</h4>
                  <p>Led AI core development in large-scale automotive platform serving US dealers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
