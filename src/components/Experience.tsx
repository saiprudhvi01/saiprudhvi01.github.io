import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        company: 'Vir Innovations',
        role: 'Software Engineer Trainee',
        period: 'Sep 2025 - Jul 2026',
        location: 'On-Site',
        description: 'Built robotics software modules in Python, improving system efficiency and responsiveness.',
        responsibilities: [
            'Developed robotics software modules using Python',
            'Improved system efficiency and responsiveness',
            'Collaborated with cross-functional teams',
            'Implemented real-time data processing solutions'
        ],
        technologies: ['Python', 'Robotics', 'Software Engineering', 'System Optimization']
    },
    {
        company: 'ProfilePheme Software Pvt Ltd',
        role: 'AI/ML Intern',
        period: '2024 | May - June',
        location: 'Remote',
        description: 'AI/ML-driven Software Engineer skilled in Python, ML, DL, NLP, and Computer Vision, creating real-time intelligent and scalable AI solutions for software and robotics.',
        responsibilities: [
            'Developed NLP-based Sentiment Analysis system',
            'Enhanced system with Explainable AI (XAI)',
            'Created real-time intelligent AI solutions',
            'Built scalable ML models for production'
        ],
        technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'XAI']
    }
];

const Experience: React.FC = () => (
    <section id="experience" className="experience">
        <div className="container">
            <motion.div 
                className="section-title" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Professional <span className="shimmer-text">Experience</span></h2>
                <p>My professional journey and key roles in AI/ML development and research</p>
            </motion.div>
            <div className="timeline">
                {experiences.map((exp, idx) => (
                    <motion.div 
                        key={exp.company} 
                        className="timeline-item" 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <motion.div 
                            className="timeline-dot"
                            whileHover={{ scale: 1.5, boxShadow: '0 0 20px var(--glow-primary)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        ></motion.div>
                        <motion.div 
                            className="timeline-content glass"
                            whileHover={{ 
                                y: -5,
                                boxShadow: '0 0 30px var(--glow-primary), 0 0 60px var(--glow-accent)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="exp-header">
                                <div className="exp-role">
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                                <div className="exp-meta">
                                    <motion.span 
                                        className="exp-date"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Calendar size={14} /> {exp.period}
                                    </motion.span>
                                    <motion.span 
                                        className="exp-loc"
                                        whileHover={{ x: 5 }}
                                    >
                                        <MapPin size={14} /> {exp.location}
                                    </motion.span>
                                </div>
                            </div>
                            <p className="exp-desc">{exp.description}</p>
                            <ul className="exp-tasks">
                                {exp.responsibilities.map((task, taskIdx) => (
                                    <motion.li 
                                        key={task}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2 + taskIdx * 0.1 }}
                                    >
                                        {task}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {exp.technologies.map((tech) => (
                                    <motion.span 
                                        key={tech} 
                                        className="tech-badge"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: '#00F5A0',
                                            color: '#101815',
                                            boxShadow: '0 0 15px var(--glow-primary)'
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;