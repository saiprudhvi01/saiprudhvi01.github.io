import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import './Achievements.css';

const achievements = [
    {
        title: 'Top 10 Finalist - Infosys Hackathon',
        organization: 'Infosys',
        description: 'Developed "Agri Guru", an AI platform for regional farmers using NASA power data and Twilio IVR.',
        icon: <Trophy />,
        year: '2024'
    },
    {
        title: 'Winner - IBM ICE Day',
        organization: 'IBM',
        description: 'First place for "Health Vision", a tool identifying causal factors for Alzheimer\'s disease.',
        icon: <Star />,
        year: '2023'
    },
    {
        title: 'Finalist - Smart India Hackathon',
        organization: 'Govt. of India',
        description: 'Developed a solutions for real-world agricultural challenges using AI/ML.',
        icon: <Award />,
        year: '2023'
    }
];

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Honors & <span>Achievements</span></h2>
                    <p>Recognition and awards from hackathons and competitions</p>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="achievement-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-date">{item.year}</div>
                            <h3>{item.title}</h3>
                            <p className="org">{item.organization}</p>
                            <p className="desc">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
