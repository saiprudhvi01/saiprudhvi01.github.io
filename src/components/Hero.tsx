import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Sai <span>Prudhvi</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Data Scientist | AI Engineer
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Passionate about solving complex problems using Data Science and Machine Learning.
                        Transforming data into insights and building intelligent systems that make a difference.
                    </motion.p>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="https://github.com/saiprudhvi01" target="_blank" rel="noreferrer"><Github /></a>
                        <a href="https://linkedin.com/in/saiprudhvi-bodempudi11" target="_blank" rel="noreferrer"><Linkedin /></a>
                        <a href="mailto:saiprudhvibodempudi11@gmail.com"><Mail /></a>
                        <a href="tel:+917893277617"><Phone /></a>
                    </motion.div>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="https://drive.google.com/file/d/1Ruq2pKlTaBdaYvTBNEPnDycNZ_2AXuAy/view?usp=sharing" target="_blank" className="btn btn-outline">My Resume</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="img-container">
                        <img src="/profile.png" alt="Sai Prudhvi Bodempudi" />
                        <div className="img-backdrop"></div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-down"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
