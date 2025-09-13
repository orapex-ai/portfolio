import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPython, 
  FaBrain, 
  FaDatabase,
  FaWhatsapp,
  FaLanguage,
  FaFileContract,
  FaCar,
  FaChartLine
} from 'react-icons/fa';
import { SiFastapi, SiOpenai, SiLangchain } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: "Qur'an Ibn Kathir RAG Assistant",
      description: "Arabic RAG system for Qur'an interpretation using Ibn Kathir tafsir. Features retrieval hygiene, cross-encoder reranking, and answer grounding with citations.",
      image: "https://via.placeholder.com/400x250/5f8787/ffffff?text=Quran+RAG",
      technologies: ["Python", "LangChain", "ChromaDB", "Arabic NLP"],
      category: "ai",
      icon: <FaBrain />,
      features: [
        "Arabic NLP with diacritics handling",
        "Cross-encoder reranking for quality",
        "Answer grounding with citations",
        "Curated tafsir content processing"
      ],
      impact: "Improved RAG answer quality by adding ranking layer on dense retrieval"
    },
    {
      id: 2,
      title: "Database ChartBot",
      description: "Natural language to SQL generation with automatic chart creation. Features schema-aware prompting, guardrails, and explainer traces.",
      image: "https://via.placeholder.com/400x250/e78a53/ffffff?text=ChartBot",
      technologies: ["Python", "FastAPI", "PostgreSQL", "LangChain"],
      category: "backend",
      icon: <FaChartLine />,
      features: [
        "NL2SQL with schema awareness",
        "Automatic table/chart generation",
        "Query safety guardrails",
        "SQL explanation traces"
      ],
      impact: "Enabled non-technical staff to self-serve analytics via NL → SQL → chart workflow"
    },
    {
      id: 3,
      title: "WhatsApp Restaurant Bot",
      description: "AI chatbot for restaurant chain handling customer queries, order creation, and status updates via WhatsApp Business API.",
      image: "https://via.placeholder.com/400x250/fbcb97/ffffff?text=WhatsApp+Bot",
      technologies: ["Python", "WhatsApp API", "FastAPI", "WebSockets"],
      category: "ai",
      icon: <FaWhatsapp />,
      features: [
        "Intent recognition and order flow",
        "Item availability checking",
        "Order status tracking",
        "Restaurant backoffice integration"
      ],
      impact: "Reduced manual order-intake effort by moving to conversational ordering"
    },
    {
      id: 4,
      title: "Friday Sermon Live Translation",
      description: "Real-time speech-to-speech translation pipeline for Arabic sermons with ≤3s latency. Includes sign-language PoC.",
      image: "https://via.placeholder.com/400x250/888888/ffffff?text=Live+Translation",
      technologies: ["Python", "WebSockets", "STT", "MT", "TTS"],
      category: "ai",
      icon: <FaLanguage />,
      features: [
        "Streaming STT → MT → TTS pipeline",
        "Sub-3 second latency",
        "Fallback and silence handling",
        "Sign-language prototype"
      ],
      impact: "Enabled real-time multilingual sermon accessibility"
    },
    {
      id: 5,
      title: "Smart Contract Manager",
      description: "Email ingestion system that matches corporate contracts against policies, detects conflicts, and summarizes findings for legal teams.",
      image: "https://via.placeholder.com/400x250/999999/ffffff?text=Contract+Manager",
      technologies: ["Python", "Email Processing", "RAG", "Vector Stores"],
      category: "ai",
      icon: <FaFileContract />,
      features: [
        "Email ingestion and processing",
        "Policy/contract embedding store",
        "Conflict and risk detection",
        "Legal team summarization"
      ],
      impact: "Automated contract analysis and risk assessment"
    },
    {
      id: 6,
      title: "Automotive Dealer Platform",
      description: "Large-scale platform for US automotive dealers with AI-powered negotiation, inventory management, and financing options.",
      image: "https://via.placeholder.com/400x250/5f8787/ffffff?text=Auto+Platform",
      technologies: ["Python", "FastAPI", "AI Agents", "Credit Scoring"],
      category: "backend",
      icon: <FaCar />,
      features: [
        "Dealer onboarding and rules",
        "AI negotiation chatbot",
        "Credit-based financing",
        "Test-drive scheduling"
      ],
      impact: "Automated dealer operations with AI-powered customer interactions"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          
          <motion.div className="project-filters" variants={itemVariants}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-icon">{project.icon}</div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-impact">
                    <strong>Impact:</strong> {project.impact}
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <button className="btn btn-outline">
                      <FaGithub />
                      View Code
                    </button>
                    <button className="btn btn-primary">
                      <FaExternalLinkAlt />
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
