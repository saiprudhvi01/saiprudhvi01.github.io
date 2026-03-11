import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Martin – Robotic Mannequin',
        category: 'AI/ML',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Autonomous navigation system using offline OSM maps, LiDAR obstacle detection, and SLAM.',
        tech: ['Python', 'QML', 'OpenCV', 'Embedded'],
        link: '#',
        featured: true
    },
    {
        id: 2,
        title: 'Agri Guru',
        category: 'Agriculture',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Farmer assistance platform with IVR-based crop advisory and NASA weather integration.',
        tech: ['Python', 'Streamlit', 'Twilio', 'NASA API'],
        link: 'https://github.com/saiprudhvi01/Farmer-Assistant',
        featured: true
    },
    {
        id: 3,
        title: 'Sign Aura',
        category: 'AI/ML',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Advanced sign language detection and interpretation system using computer vision.',
        tech: ['Python', 'OpenCV', 'Deep Learning'],
        link: 'https://github.com/saiprudhvi01/Sign-Aura'
    },
    {
        id: 4,
        title: 'Alzheimer Prediction',
        category: 'Medical',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Explainable AI system for early Alzheimer\'s detection using causal analysis.',
        tech: ['Python', 'Causal AI', 'Medical AI'],
        link: 'https://github.com/saiprudhvi01/Alzheimer-Disease-Prediction-with-Causal-AI-Analysis'
    },
    {
        id: 5,
        title: 'ZTA Readiness',
        category: 'Cyber',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Zero Trust Architecture readiness assessment tool for enterprise security evaluation.',
        tech: ['Cybersecurity', 'Assessment', 'Enterprise'],
        link: 'https://github.com/saiprudhvi01/zta-readiness-assessment'
    },
    {
        id: 6,
        title: 'Tanglish Analyzer',
        category: 'NLP',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Sentiment analysis tool for Tamil-English mixed text using Streamlit.',
        tech: ['Python', 'Streamlit', 'NLP'],
        link: 'https://github.com/saiprudhvi01/Tanglish-Sentimental-Analyzer-using-Streamlit'
    }
];

const categories = ['All', 'AI/ML', 'Medical', 'Web', 'Cyber', 'Data', 'Education', 'Agriculture', 'NLP'];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Featured <span>Projects</span></h2>
                    <p>Highlights from my portfolio of 38+ projects across multiple domains</p>
                </motion.div>

                <div className="category-filter">
                    <Filter size={20} className="filter-icon" />
                    <div className="filter-btns">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={activeCategory === cat ? 'active' : ''}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                className="project-card glass"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-category-badge">{project.category}</div>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech-tags">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noreferrer"><Github size={18} /> Code</a>
                                    <a href="#"><ExternalLink size={18} /> Demo</a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="view-all-projects">
                    <p>And 30+ more projects on GitHub...</p>
                    <a href="https://github.com/saiprudhvi01" target="_blank" rel="noreferrer" className="btn btn-outline">
                        Visit GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
