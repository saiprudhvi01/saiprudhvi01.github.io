import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">Sai <span>Prudhvi</span></a>
                        <p>Computer Science Engineer specializing in AI/ML. Building intelligent systems for a better future.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Me</h4>
                        <div className="social-icons">
                            <a href="https://linkedin.com/in/saiprudhvi-bodempudi11" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                            <a href="https://github.com/saiprudhvi01" target="_blank" rel="noreferrer"><Github size={20} /></a>
                            <a href="mailto:saiprudhvibodempudi11@gmail.com"><Mail size={20} /></a>
                            <a href="tel:+917893277617"><Phone size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sai Prudhvi Bodempudi. All Rights Reserved.</p>
                    <button className="back-to-top" onClick={scrollToTop}>
                        <ChevronUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
