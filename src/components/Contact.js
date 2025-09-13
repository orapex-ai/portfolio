import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: ''
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'kareemqasarwah2001@gmail.com',
      link: 'mailto:kareemqasarwah2001@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+972-597334687',
      link: 'tel:+972597334687'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Jenin, West Bank, Palestine',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/kareemqasarwah',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/kareemqasarwah',
      color: '#0077b5'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          
          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-buttons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                
                {formStatus.message && (
                  <div className={`form-status ${formStatus.type}`}>
                    {formStatus.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                    {formStatus.message}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
