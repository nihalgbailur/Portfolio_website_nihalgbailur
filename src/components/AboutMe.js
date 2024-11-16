import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Styled Components
const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 80px 20px; /* Proper padding for spacing */
  max-width: 1200px;
  margin: 0 auto; /* Center horizontally, merge seamlessly */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #000; /* Black background for contrast */
  color: #fff; /* White text for visibility */
  border-radius: 16px; /* Optional: keep rounded corners for a modern look */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); /* Shadow for depth */

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const TextWrapper = styled(motion.div)`
  max-width: 1000px; /* Restricts the width for better readability */
  margin: 0 auto; /* Centers the content horizontally */
`;

const Title = styled(motion.h1)`
  font-size: 48px; /* Larger font size for better emphasis */
  margin-bottom: 20px;
  color: #00aaff; /* Bright color for visibility */
  background: linear-gradient(45deg, #00aaff, #00ffaa); /* Blue to green gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SubText = styled(motion.p)`
  font-size: 24px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #fff; /* White text for better contrast */

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const SkillSection = styled.div`
  margin-top: 20px;
`;

const SkillTitle = styled(motion.h2)`
  font-size: 32px;
  margin-bottom: 15px;
  color: #00aaff; /* Bright blue color */
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const SkillList = styled.ul`
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 10px;
`;

// Functional Component
function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <AboutContainer id="about">
      <TextWrapper
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Hello! I'm a passionate Automotive Testing Professional
        </Title>
        <SubText
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          With a strong focus on Python-based ADAS Testing, I bring valuable
          skills in Python, Git, GitHub, MTS tool, and CarMaker tool to ensure
          top-notch performance and reliability in automotive systems,
          contributing to enhanced safety and innovation in the industry.
        </SubText>
        <SkillSection>
          <SkillTitle
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Key Skills & Experiences
          </SkillTitle>
          <SkillList>
            {[
              'Over 2.5 years of expertise in Automotive Testing',
              'Specializing in the Automotive domain, excelling in testing Advanced Driver Assistance Systems (ADAS)',
              'Proficient in Python scripting to create efficient testing scripts',
              'Experienced with Git and GitHub for version control and collaborative development',
              'Utilized MTS tool for comprehensive Automotive Testing and validation',
              'Familiar with CarMaker tool for simulating real-world scenarios and optimizing automotive system performance',
            ].map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.2 }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillList>
        </SkillSection>
      </TextWrapper>
    </AboutContainer>
  );
}

export default AboutMe;