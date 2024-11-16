import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkContainer = styled.section`
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  background: #000; /* Solid black background */
  color: #fff;
  margin: 0;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 70px 15px;
  }

  @media (max-width: 480px) {
    padding: 50px 10px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #56ccf2, #2f80ed); /* Blue to Purple Gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const JobSection = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const JobTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #56ccf2, #2f80ed); /* Blue to Purple Gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

const CompanyDetails = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 3px;
  }
`;

const Duration = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: #bbb;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <WorkContainer id="work">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Title>Work Experience</Title>

        {/* Continental Experience */}
        <JobSection>
          <JobTitle>Engineer</JobTitle>
          <CompanyDetails>Continental · Full-time</CompanyDetails>
          <Duration>Dec 2021 - Present · 2 yrs 9 mos</Duration>
          <Description>
            ADAS testing with over 2.9 years of experience, leveraging Python scripting for efficient test automation.
            Proficient in Git and GitHub for streamlined collaboration and experienced in using MTS and CarMaker tools.
          </Description>
        </JobSection>

        {/* GRID R&D Internship */}
        <JobSection>
          <JobTitle>Student Intern</JobTitle>
          <CompanyDetails>GRID R&D · Internship</CompanyDetails>
          <Duration>Oct 2019 - Dec 2019 · 3 mos</Duration>
          <Description>
            During my three-month internship at Grid R&D Company, I actively contributed to two pioneering projects,
            gaining hands-on experience in stock trading, real-time stock prediction using PyQt5, NLP-based sentiment
            analysis on Twitter data, and implementing a Flask backend for secure login credentials generation.
          </Description>
        </JobSection>
      </motion.div>
    </WorkContainer>
  );
}

export default WorkExperience;