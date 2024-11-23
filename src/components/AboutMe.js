import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";

// Styled Components
const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000, #111);
  color: #fff;
  text-align: center;
  position: relative;
`;

const Navbar = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  gap: 20px;

  a {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #00aaff;
    }
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 15px;

    a {
      font-size: 14px;
    }
  }
`;

const HeroText = styled(motion.div)`
  max-width: 800px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    background: linear-gradient(45deg, #00aaff, #00ffaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5);

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: #ccc;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  .arrow {
    width: 24px;
    height: 24px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    animation: bounce 1.5s infinite;

    @keyframes bounce {
      0%, 100% {
        transform: rotate(45deg) translateY(0);
      }
      50% {
        transform: rotate(45deg) translateY(10px);
      }
    }
  }

  span {
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

// Component
function About() {
  return (
    <AboutContainer id="about">
      {/* Navbar */}
      <Navbar>
        <a
          href="https://www.linkedin.com/in/nihal-g-bailur/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/your_resume_drive_id/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </Navbar>

      {/* Hero Text */}
      <HeroText
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          I am NIHAL G BAILUR   <br />
          ADAS Engineer
        </h1>
        <p>
          A passionate software engineer with expertise in automotive testing
          and Python scripting. Based in India, driving innovation in ADAS and
          beyond.
        </p>
      </HeroText>

      {/* Scroll Indicator */}
      <ScrollIndicator>
        <div className="arrow"></div>
        <span>Scroll Down</span>
      </ScrollIndicator>
    </AboutContainer>
  );
}

export default About;