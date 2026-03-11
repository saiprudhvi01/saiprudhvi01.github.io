import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/variables.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Publications />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
