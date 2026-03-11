import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './Certifications.css';

const certificationCategories = [
    {
        category: 'Full Stack Development',
        certs: [
            {
                title: 'Full Stack Development Internship',
                issuer: 'NxtWave',
                date: '2024',
                link: 'https://certificates.ccbp.in/intensive/full-stack-development?id=NXTWAVE-FSD-2024'
            }
        ]
    },
    {
        category: 'Computer Science Fundamental',
        certs: [
            { title: 'Information Security and Cyber Security', issuer: 'NPTEL', date: '2023', link: '#' },
            { title: 'Computer Networks and IP Protocols', issuer: 'NPTEL', date: '2023', link: '#' },
            { title: 'Database Management Systems', issuer: 'NPTEL', date: '2023', link: '#' }
        ]
    },
    {
        category: 'AI & Data Science',
        certs: [
            { title: 'Machine Learning', issuer: 'Coursera', date: '2023', link: '#' },
            { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', date: '2024', link: '#' },
            { title: 'Tableau for Data Science', issuer: 'Udemy', date: '2023', link: '#' }
        ]
    }
];

const Certifications: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>('Full Stack Development');

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Professional <span>Certifications</span></h2>
                    <p>Continuous learning and skill validation from leading institutions</p>
                </motion.div>

                <div className="certs-accordion">
                    {certificationCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.category}
                            className={`cert-category glass ${expandedCategory === cat.category ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div
                                className="category-header"
                                onClick={() => toggleCategory(cat.category)}
                            >
                                <div className="cat-title-container">
                                    <Award className="cat-icon" />
                                    <h3>{cat.category}</h3>
                                </div>
                                {expandedCategory === cat.category ? <ChevronUp /> : <ChevronDown />}
                            </div>

                            <AnimatePresence>
                                {expandedCategory === cat.category && (
                                    <motion.div
                                        className="category-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="certs-grid">
                                            {cat.certs.map((cert, cIdx) => (
                                                <div key={cIdx} className="cert-item">
                                                    <div className="cert-info">
                                                        <h4>{cert.title}</h4>
                                                        <p>{cert.issuer} · {cert.date}</p>
                                                    </div>
                                                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
