import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import pythonLogo from '../assets/python-logo.png';
import gitLogo from '../assets/git-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import jiraLogo from '../assets/jira-logo.png';
import confluenceLogo from '../assets/confluence-logo.png';

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1e;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  width: 80%;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SkillLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const SkillName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled(motion.div)`
  height: 15px;
  background-color: #0071e3;
  border-radius: 10px;
`;

function Skills() {
  const skills = [
    { name: 'Python', logo: pythonLogo, level: '90%' },
    { name: 'Git/GitHub', logo: gitLogo,level: '90%' },
    { name: 'SQL', logo: sqlLogo, level: '70%' },
    { name: 'Jira', logo: jiraLogo, level: '90%' },
    { name: 'Confluence', logo: confluenceLogo, level: '90%' },
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SkillHeader>
              <SkillLogo src={skill.logo} alt={`${skill.name} logo`} />
              <SkillName>{skill.name}</SkillName>
            </SkillHeader>
            {skill.level && (
              <ProgressBarContainer>
                <ProgressBar
                  initial={{ width: '0%' }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </ProgressBarContainer>
            )}
          </SkillCard>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
}

export default Skills;