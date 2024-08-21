import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkContainer = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #111;
  color: #fff;

  @media (max-width: 768px) {
    padding: 70px 15px;
  }

  @media (max-width: 480px) {
    padding: 50px 10px;
  }
`;

const ExperienceWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

const JobTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;

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
  margin-bottom: 20px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
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
      <ExperienceWrapper
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Title>Work Experience</Title>

        {/* Continental Experience */}
        <JobTitle>Engineer</JobTitle>
        <CompanyDetails>Continental · Full-time</CompanyDetails>
        <Duration>Dec 2021 - Present · 2 yrs 9 mos</Duration>
        <Description>
          ADAS testing with over 2.9 years of experience, leveraging Python scripting for efficient test automation. Proficient in Git and GitHub for streamlined collaboration and experienced in using MTS and CarMaker tools.
        </Description>

        {/* GRID R&D Internship */}
        <JobTitle>Student Intern</JobTitle>
        <CompanyDetails>GRID R&D · Internship</CompanyDetails>
        <Duration>Oct 2019 - Dec 2019 · 3 mos</Duration>
        <Description>
          During my three-month internship at Grid R&D Company, I actively contributed to two pioneering projects, gaining hands-on experience in stock trading, real-time stock prediction using PyQt5, NLP-based sentiment analysis on Twitter data, and implementing a Flask backend for secure login credentials generation.
        </Description>
        
      </ExperienceWrapper>
    </WorkContainer>
  );
}

export default WorkExperience;