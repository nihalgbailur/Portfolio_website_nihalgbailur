import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define a container for the skills section
const SkillsContainer = styled.section`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1); /* Glassmorphic effect */
  backdrop-filter: blur(10px);
  color: #fff;
`;

// Define a styled wrapper for each skill
const SkillWrapper = styled(motion.div)`
  width: 80%;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 20px;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00aaff, #00ffaa);
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
`;

// Define the skills component
function Skills() {
  // Array of skills with titles and levels
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'Jira', level: 80 },
    { name: 'Confluence', level: 75 },
  ];

  return (
    <SkillsContainer id="skills">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <SkillWrapper
          key={index}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SkillTitle>{skill.name}</SkillTitle>
          <ProgressBarContainer>
            <ProgressBar
              initial={{ width: '0%' }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </ProgressBarContainer>
        </SkillWrapper>
      ))}
    </SkillsContainer>
  );
}

export default Skills;