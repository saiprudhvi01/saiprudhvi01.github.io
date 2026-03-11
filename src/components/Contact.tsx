import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Get In <span>Touch</span></h2>
                    <p>Feel free to contact me for any opportunities or collaborations</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-card glass">
                            <h3>Contact Information</h3>
                            <div className="contact-item">
                                <div className="contact-icon"><Mail /></div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <a href="mailto:saiprudhvibodempudi11@gmail.com">saiprudhvibodempudi11@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><Phone /></div>
                                <div className="contact-text">
                                    <h4>Phone</h4>
                                    <a href="tel:+917893277617">+91 7893277617</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><MapPin /></div>
                                <div className="contact-text">
                                    <h4>Location</h4>
                                    <p>India</p>
                                </div>
                            </div>

                            <div className="contact-socials">
                                <h4>Connect With Me</h4>
                                <div className="social-btns">
                                    <a href="https://linkedin.com/in/saiprudhvi-bodempudi11" target="_blank" rel="noreferrer"><Linkedin /></a>
                                    <a href="https://github.com/saiprudhvi01" target="_blank" rel="noreferrer"><Github /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form glass" action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="afc92e63-8e0d-40ae-bc32-b66f1711c0b9" />
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="name" required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" name="email" required placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" name="subject" required placeholder="Project Collaboration" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" required placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
