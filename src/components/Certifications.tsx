import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './Certifications.css';

const certificationCategories = [
    {
        category: 'Cloud & AI',
        certs: [
            {
                title: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
                issuer: 'Oracle',
                date: 'Issued Dec 2023 | Expired Dec 2025 | Credential ID 100448926OCI23AIFCA',
                link: 'https://drive.google.com/file/d/1vu1V7I-z8nDdfQTDMFxxYDK6XgFiFT9k/view?usp=sharing'
            },
            {
                title: 'Build a Natural Language Processing Solution with Azure AI Language',
                issuer: 'Microsoft',
                date: 'Issued Feb 2024',
                link: 'https://drive.google.com/file/d/1Zb9n0AY4fFj927j4MryTQSVx2X8D8KYm/view'
            },
            {
                title: 'Microsoft AI Skills Challenge',
                issuer: 'Microsoft',
                date: 'Issued Jan 2024',
                link: 'https://drive.google.com/file/d/1fCbBpqDkQ_XDx-WPTw1si6msTNT6pKJq/view'
            }
        ]
    },
    {
        category: 'Data & Programming',
        certs: [
            {
                title: 'Introduction to Data Science',
                issuer: 'Infosys Springboard',
                date: 'Issued Aug 2024',
                link: 'https://drive.google.com/file/d/1VltXzSrZWtW0yjcrzUVZLGMlhUN-sQ2v/view'
            },
            {
                title: 'Python Programming',
                issuer: 'Codegnan',
                date: 'Issued Jun 2024 | Skills: Python (Programming Language)',
                link: 'https://drive.google.com/file/d/1XUm868Cj5H8-wVQIkJrUAn-Q2kPz_nmJ/view'
            }
        ]
    }
];

const Certifications: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>('Cloud & AI');

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
                                                        <p>{cert.issuer} &middot; {cert.date}</p>
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