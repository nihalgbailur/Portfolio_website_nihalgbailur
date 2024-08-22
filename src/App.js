import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#f5f5f5')};

  h2 {
    font-size: 36px;
    margin: 0;
  }
`;

const AppWrapper = styled.div`
  scroll-behavior: smooth;
`;

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Navbar activeSection={activeSection} />
      <Section id="home" bgColor="#0d0d0d">
        <Home />
      </Section>
      <Section id="about" bgColor="#0d0d0d">
        <AboutMe />
      </Section>
      <Section id="work" bgColor="#0d0d0d">
        <WorkExperience />
      </Section>
      <Section id="skills" bgColor="#0d0d0d">
        <Skills />
      </Section>
      <Section id="education" bgColor="#0d0d0d">
        <Education />
      </Section>
      <Section id="certifications" bgColor="#0d0d0d">
        <Certifications />
      </Section>
      <Section id="projects" bgColor="#0d0d0d">
        <Projects />
      </Section>
      <Section id="publications" bgColor="#0d0d0d">
        <Publications />
      </Section>
      <Section id="contact" bgColor="#0d0d0d">
        <Contact />
      </Section>
    </AppWrapper>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;