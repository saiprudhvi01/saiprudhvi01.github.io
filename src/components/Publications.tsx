import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import './Publications.css';

const publications = [
    {
        title: 'Alzheimer Disease Prediction Using Recursive Feature Elimination and Artificial Neural Network',
        journal: 'IEEE Xplore',
        link: 'https://ieeexplore.ieee.org/document/10276170'
    }
];

const Publications: React.FC = () => {
    return (
        <section id="publications" className="publications">
            <div className="container">
                <motion.div className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2>Research <span>Publications</span></h2>
                    <p>My contributions to research conferences and journals in the field of AI/ML</p>
                </motion.div>
                <div className="publications-list">
                    {publications.map((pub, idx) => (
                        <motion.div key={pub.title} className="publication-item glass" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                            <div className="pub-icon"><FileText size={24} /></div>
                            <div className="pub-info">
                                <h3>{pub.title}</h3>
                                {pub.journal && <p className="pub-journal">{pub.journal}</p>}
                                <div className="pub-footer">
                                    <a href={pub.link} target="_blank" rel="noreferrer" className="pub-link">View paper <ExternalLink size={16} /></a>
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