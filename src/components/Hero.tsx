import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import './Hero.css';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

const Particles = () => {
    const particles = Array.from({ length: 50 }, (_, i,) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
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
                        x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 20}%`, `${particle.x}%`],
                        y: [`${particle.y}%`, `${particle.y + (Math.random() - 0.5) * 20}%`, `${particle.y}%`],
                        opacity: [0, 0.6, 0],
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

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section id="home" className="hero" onMouseMove={handleMouseMove}>
            <Particles />
            <div className="light-streak" style={{ top: '20%' }}></div>
            <div className="light-streak" style={{ top: '60%', animationDelay: '4s' }}></div>
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ y: y1, opacity }}
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
                        Sai <span className="shimmer-text">Prudhvi</span>
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
                        <MagneticButton><a href="https://github.com/saiprudhvi01" target="_blank" rel="noreferrer"><Github /></a></MagneticButton>
                        <MagneticButton><a href="https://linkedin.com/in/saiprudhvi-bodempudi11" target="_blank" rel="noreferrer"><Linkedin /></a></MagneticButton>
                        <MagneticButton><a href="mailto:saiprudhvibodempudi11@gmail.com"><Mail /></a></MagneticButton>
                        <MagneticButton><a href="tel:+917893277617"><Phone /></a></MagneticButton>
                    </motion.div>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <MagneticButton><a href="#projects" className="btn btn-primary">View Projects</a></MagneticButton>
                        <MagneticButton><a href="https://drive.google.com/file/d/1Ruq2pKlTaBdaYvTBNEPnDycNZ_2AXuAy/view?usp=sharing" target="_blank" className="btn btn-outline">My Resume</a></MagneticButton>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ y: y2, scale, opacity }}
                >
                    <TiltCard>
                        <div className="img-container">
                            <div className="img-glow"></div>
                            <img src="/profile.png" alt="Sai Prudhvi Bodempudi" />
                            <div className="img-backdrop"></div>
                        </div>
                    </TiltCard>
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
