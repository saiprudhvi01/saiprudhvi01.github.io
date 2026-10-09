import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Filter } from 'lucide-react';
import './Projects.css';

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -5;
        const rotateYValue = ((x - centerX) / centerX) * 5;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    link?: string;
    featured?: boolean;
};

const projects: Project[] = [
    { id: 1, title: 'Martin - Robotic Mannequin', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Autonomous navigation system using offline OSM maps, LiDAR obstacle detection, and SLAM.', tech: ['Python', 'QML', 'OpenCV', 'Embedded'], featured: true },
    { id: 2, title: 'Agri Guru', category: 'Agriculture', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Farmer assistance platform with IVR-based crop advisory and NASA weather integration.', tech: ['Python', 'Streamlit', 'Twilio', 'NASA API'], link: 'https://github.com/saiprudhvi01/Farmer-Assistant', featured: true },
    { id: 3, title: 'Sign Aura', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Advanced sign language detection and interpretation system using computer vision.', tech: ['Python', 'OpenCV', 'Deep Learning'], link: 'https://github.com/saiprudhvi01/Sign-Aura' },
    { id: 4, title: 'Alzheimer Prediction', category: 'Medical', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Explainable AI system for early Alzheimer\'s detection using causal analysis.', tech: ['Python', 'Causal AI', 'Medical AI'], link: 'https://github.com/saiprudhvi01/Alzheimer-Disease-Prediction-with-Causal-AI-Analysis' },
    { id: 5, title: 'ZTA Readiness', category: 'Cyber', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Zero Trust Architecture readiness assessment tool for enterprise security evaluation.', tech: ['Cybersecurity', 'Assessment', 'Enterprise'], link: 'https://github.com/saiprudhvi01/zta-readiness-assessment' },
    { id: 6, title: 'Tanglish Analyzer', category: 'NLP', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Sentiment analysis tool for Tamil-English mixed text using Streamlit.', tech: ['Python', 'Streamlit', 'NLP'], link: 'https://github.com/saiprudhvi01/Tanglish-Sentimental-Analyzer-using-Streamlit' }
];

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div 
                    className="section-title" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Featured <span className="shimmer-text">Projects</span></h2>
                    <p>Highlights from my portfolio of 38+ projects across multiple domains</p>
                </motion.div>
                <div className="category-filter">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Filter size={20} className="filter-icon" />
                    </motion.div>
                    <div className="filter-btns">
                        {categories.map((category, idx) => (
                            <motion.button
                                key={category}
                                className={activeCategory === category ? 'active' : ''}
                                onClick={() => setActiveCategory(category)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map((project, idx) => (
                            <TiltCard key={project.id}>
                                <motion.div 
                                    layout
                                    className="project-card glass" 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    exit={{ opacity: 0, scale: 0.9 }} 
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    whileHover={{ 
                                        y: -10,
                                        boxShadow: '0 0 30px var(--glow-primary), 0 0 60px var(--glow-accent)'
                                    }}
                                >
                                    <div className="project-image">
                                        <motion.img 
                                            src={project.image} 
                                            alt={project.title}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="project-category-badge">{project.category}</div>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech-tags">
                                        {project.tech.map((technology) => (
                                            <motion.span
                                                key={technology}
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    backgroundColor: '#00F5A0',
                                                    color: '#101815'
                                                }}
                                            >
                                                {technology}
                                            </motion.span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <div className="project-links">
                                            <motion.a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                whileHover={{ x: 5, color: 'var(--primary)' }}
                                            >
                                                <Github size={18} /> Code
                                            </motion.a>
                                        </div>
                                    )}
                                </motion.div>
                            </TiltCard>
                        ))}
                    </AnimatePresence>
                </motion.div>
                <motion.div 
                    className="view-all-projects"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>And 30+ more projects on GitHub...</p>
                    <motion.a 
                        href="https://github.com/saiprudhvi01" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Visit GitHub Profile
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;