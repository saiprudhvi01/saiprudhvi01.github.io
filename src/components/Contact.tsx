import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Particles = () => {
    const particles = Array.from({ length: 30 }, (_, i,) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="particles-container">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="particle"
                    initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
                    animate={{
                        x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 15}%`, `${particle.x}%`],
                        y: [`${particle.y}%`, `${particle.y + (Math.random() - 0.5) * 15}%`, `${particle.y}%`],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        position: 'absolute',
                        borderRadius: '50%',
                        background: '#00F5A0',
                        filter: 'blur(1px)',
                    }}
                />
            ))}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <Particles />
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Get In <span className="shimmer-text">Touch</span></h2>
                    <p>Feel free to contact me for any opportunities or collaborations</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-card glass">
                            <h3>Contact Information</h3>
                            <motion.div 
                                className="contact-item"
                                whileHover={{ x: 10 }}
                            >
                                <div className="contact-icon"><Mail /></div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <a href="mailto:saiprudhvibodempudi11@gmail.com">saiprudhvibodempudi11@gmail.com</a>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="contact-item"
                                whileHover={{ x: 10 }}
                            >
                                <div className="contact-icon"><Phone /></div>
                                <div className="contact-text">
                                    <h4>Phone</h4>
                                    <a href="tel:+917893277617">+91 7893277617</a>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="contact-item"
                                whileHover={{ x: 10 }}
                            >
                                <div className="contact-icon"><MapPin /></div>
                                <div className="contact-text">
                                    <h4>Location</h4>
                                    <p>India</p>
                                </div>
                            </motion.div>

                            <div className="contact-socials">
                                <h4>Connect With Me</h4>
                                <div className="social-btns">
                                    <motion.a 
                                        href="https://linkedin.com/in/saiprudhvi-bodempudi11" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ 
                                            scale: 1.1,
                                            rotate: 10,
                                            backgroundColor: '#00F5A0',
                                            borderColor: '#00F5A0',
                                            boxShadow: '0 0 20px var(--glow-primary)'
                                        }}
                                    >
                                        <Linkedin />
                                    </motion.a>
                                    <motion.a 
                                        href="https://github.com/saiprudhvi01" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ 
                                            scale: 1.1,
                                            rotate: -10,
                                            backgroundColor: '#00F5A0',
                                            borderColor: '#00F5A0',
                                            boxShadow: '0 0 20px var(--glow-primary)'
                                        }}
                                    >
                                        <Github />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.form 
                            className="contact-form glass" 
                            action="https://api.web3forms.com/submit" 
                            method="POST"
                            whileHover={{ 
                                boxShadow: '0 0 30px var(--glow-primary), 0 0 60px var(--glow-accent)'
                            }}
                        >
                            <input type="hidden" name="access_key" value="afc92e63-8e0d-40ae-bc32-b66f1711c0b9" />
                            <div className="form-group">
                                <label>Your Name</label>
                                <motion.input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    placeholder="John Doe"
                                    whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <motion.input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    placeholder="john@example.com"
                                    whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <motion.input 
                                    type="text" 
                                    name="subject" 
                                    required 
                                    placeholder="Project Collaboration"
                                    whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <motion.textarea 
                                    name="message" 
                                    required 
                                    placeholder="Tell me about your project..."
                                    whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                                ></motion.textarea>
                            </div>
                            <motion.button 
                                type="submit" 
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
