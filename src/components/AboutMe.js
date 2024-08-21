import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #000;
  color: #fff;
`;

const TextWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 24px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const SkillSection = styled.div`
  margin-top: 20px;
`;

const SkillTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 15px;
`;

const SkillList = styled.ul`
  font-size: 20px;
  line-height: 1.6;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
`;

function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
        <Title>Hello! I'm a passionate Automotive Testing Professional</Title>
        <SubText>
          With a strong focus on Python-based ADAS Testing, I bring valuable
          skills in Python, Git, GitHub, MTS tool, and CarMaker tool to ensure
          top-notch performance and reliability in automotive systems,
          contributing to enhanced safety and innovation in the industry.
        </SubText>
        <SkillSection>
          <SkillTitle>Key Skills & Experiences</SkillTitle>
          <SkillList>
            <SkillItem>Over 2.5 years of expertise in Automotive Testing</SkillItem>
            <SkillItem>Specializing in the Automotive domain, excelling in testing Advanced Driver Assistance Systems (ADAS)</SkillItem>
            <SkillItem>Proficient in Python scripting to create efficient testing scripts</SkillItem>
            <SkillItem>Experienced with Git and GitHub for version control and collaborative development</SkillItem>
            <SkillItem>Utilized MTS tool for comprehensive Automotive Testing and validation</SkillItem>
            <SkillItem>Familiar with CarMaker tool for simulating real-world scenarios and optimizing automotive system performance</SkillItem>
          </SkillList>
        </SkillSection>
      </TextWrapper>
    </AboutContainer>
  );
}

export default AboutMe;