import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        company: 'Vir Innovations',
        role: 'Software Engineering Intern',
        period: '2025 · Sep - Present',
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
        period: '2024 · May - June',
        location: 'Remote',
        description: 'AI/ML-driven Software Engineer skilled in Python, ML, DL, NLP, and Computer Vision, creating real-time intelligent and scalable AI solutions for software and robotics.',
        responsibilities: [
            'Developed NLP-based Sentiment Analysis system',
            'Enhanced system with Explainable AI (XAI)',
            'Created real-time intelligent AI solutions',
            'Built scalable ML models for production'
        ],
        technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'XAI']
    },
    {
        company: 'Weboin Digital Marketing Agency',
        role: 'Web Development Intern',
        period: '2023 · Jul - Aug',
        location: 'Remote',
        description: 'Focused on building efficient, user-friendly web applications integrated with intelligent backend capabilities.',
        responsibilities: [
            'Developed intelligent model using Causal AI',
            'Created Alzheimer\'s disease prediction system',
            'Identified key causal factors for diagnosis',
            'Delivered explainable insights for clinical decisions'
        ],
        technologies: ['Web Development', 'Python', 'Causal AI', 'Data Preprocessing', 'Healthcare AI']
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Professional <span>Experience</span></h2>
                    <p>My professional journey and key roles in AI/ML development and research</p>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="timeline-item"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass">
                                <div className="exp-header">
                                    <div className="exp-role">
                                        <h3>{exp.role}</h3>
                                        <h4>{exp.company}</h4>
                                    </div>
                                    <div className="exp-meta">
                                        <span className="exp-date"><Calendar size={14} /> {exp.period}</span>
                                        <span className="exp-loc"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                                <ul className="exp-tasks">
                                    {exp.responsibilities.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                                <div className="exp-tech">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
