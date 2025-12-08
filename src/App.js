import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    
    const personalInfo = {
        name: 'Vishal Damodar',
        title: 'Java Full Stack Developer',
        location: 'Pune, Maharashtra',
        email: 'thatvishal007@gmail.com'
    };
    
    const skills = [
        'Java', 'Spring Boot', 'React', 'MySQL', 
        'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'
    ];
    
    return (
        <div className="App">
            <Header 
                personalInfo={personalInfo}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main>
                <section id="home" className="hero-section">
                    <div className="container">
                        <h1>{personalInfo.name}</h1>
                        <p className="lead">{personalInfo.title}</p>
                        <p>Building modern web applications with passion</p>
                    </div>
                </section>
                
                {activeSection === 'about' && <About personalInfo={personalInfo} />}
                {activeSection === 'skills' && <Skills skills={skills} />}
                {activeSection === 'contact' && <Contact personalInfo={personalInfo} />}
            </main>
        </div>
    );
}

export default App;
