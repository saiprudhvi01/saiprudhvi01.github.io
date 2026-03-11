import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Database, Laptop, Bot } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: <Code size={20} />,
        skills: ['Python', 'SQL', 'Git', 'C++']
    },
    {
        title: 'AI & Machine Learning',
        icon: <Brain size={20} />,
        skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'Explainable AI', 'Causal AI']
    },
    {
        title: 'Frameworks & Libraries',
        icon: <Wrench size={20} />,
        skills: ['Flask', 'Streamlit', 'TensorFlow', 'PyTorch', 'React', 'Vite']
    },
    {
        title: 'Robotics & Systems',
        icon: <Bot size={20} />,
        skills: ['LiDAR', 'SLAM', 'Webots', 'Arduino', 'Embedded Systems']
    },
    {
        title: 'Databases',
        icon: <Database size={20} />,
        skills: ['PostgreSQL', 'SQLite', 'MongoDB', 'MySQL']
    },
    {
        title: 'Development Tools',
        icon: <Laptop size={20} />,
        skills: ['GitHub', 'Linux', 'Jupyter', 'VS Code', 'Kaggle', 'Docker']
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>My <span>Skills</span></h2>
                    <p>Technical expertise across AI/ML, programming, and development tools</p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: 'var(--shadow)' }}
                        >
                            <div className="skill-card-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
