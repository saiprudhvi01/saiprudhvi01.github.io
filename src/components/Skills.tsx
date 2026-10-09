import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Database, Laptop, Bot } from 'lucide-react';
import './Skills.css';

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
        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;
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

const skillCategories = [
    { title: 'Programming Languages', icon: <Code size={20} />, skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
    { title: 'AI & Machine Learning', icon: <Brain size={20} />, skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision', 'Large Language Models (LLMs)', 'Prompt Engineering', 'Retrieval-Augmented Generation (RAG)', 'AI Agents', 'Fine-Tuning', 'Embedding Models', 'Model Evaluation', 'Explainable AI', 'Causal AI'] },
    { title: 'Frameworks & Libraries', icon: <Wrench size={20} />, skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face Transformers', 'LangChain', 'LlamaIndex', 'Three.js', 'Flask', 'Streamlit', 'React', 'Vite'] },
    { title: 'Technologies', icon: <Bot size={20} />, skills: ['SLAM', 'Generative AI', 'REST APIs', 'Model Deployment', 'LiDAR', 'Webots', 'Arduino', 'Embedded Systems'] },
    { title: 'Databases', icon: <Database size={20} />, skills: ['Vector Databases', 'PostgreSQL', 'SQLite', 'MongoDB', 'MySQL'] },
    { title: 'Development Tools', icon: <Laptop size={20} />, skills: ['Git', 'GitHub', 'GitHub Pages', 'Linux', 'Render', 'Vercel', 'Cursor', 'Warp', 'Antigravity', 'Jupyter', 'VS Code', 'Kaggle', 'Docker'] }
];

const Skills: React.FC = () => (
    <section id="skills" className="skills">
        <div className="container">
            <motion.div 
                className="section-title" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>My <span className="shimmer-text">Skills</span></h2>
                <p>Technical expertise across AI/ML, programming, and development tools</p>
            </motion.div>
            <div className="skills-grid">
                {skillCategories.map((category, idx) => (
                    <TiltCard key={category.title}>
                        <motion.div 
                            className="skill-card glass" 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ 
                                y: -10,
                                boxShadow: '0 0 30px var(--glow-primary), 0 0 60px var(--glow-accent)'
                            }}
                        >
                            <div className="skill-card-header">
                                <motion.span 
                                    className="skill-icon"
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {category.icon}
                                </motion.span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span 
                                        key={skill} 
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 + skillIdx * 0.02 }}
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: '#00F5A0',
                                            color: '#101815',
                                            borderColor: '#00F5A0',
                                            boxShadow: '0 0 15px var(--glow-primary)'
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </TiltCard>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;