import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import './Publications.css';

const publications = [
    {
        title: 'SENT XAI: A Tool for Evaluating and Providing Explanations for AI Model Interpretations',
        journal: 'NMITCON 2023 IEEE Conference',
        date: 'Sep 2023',
        link: 'https://ieeexplore.ieee.org/document/10431326'
    },
    {
        title: 'Predicting Student Academic Performance using Feature Selection with Explainable AI',
        journal: 'International Journal of Scientific Research in Engineering and Management',
        date: 'May 2024',
        link: 'https://ijsrem.com/download/predicting-student-academic-performance-using-feature-selection-with-explainable-ai/'
    }
];

const Publications: React.FC = () => {
    return (
        <section id="publications" className="publications">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Research <span>Publications</span></h2>
                    <p>My contributions to research conferences and journals in the field of AI/ML</p>
                </motion.div>

                <div className="publications-list">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={idx}
                            className="publication-item glass"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="pub-icon">
                                <FileText size={24} />
                            </div>
                            <div className="pub-info">
                                <h3>{pub.title}</h3>
                                <p className="pub-journal">{pub.journal}</p>
                                <div className="pub-footer">
                                    <span className="pub-date">{pub.date}</span>
                                    <a href={pub.link} target="_blank" rel="noreferrer" className="pub-link">
                                        View paper <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
