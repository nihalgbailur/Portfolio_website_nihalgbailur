import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPython, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiConfluence, SiJira } from 'react-icons/si';

// Container for the skills section
const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.1); /* Frosted glass effect */
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: #fff; /* Set text color to white */
  max-width: 1000px;
  margin: auto;
`;

// Title styling
const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ffffff; /* White color for better contrast */
  margin-bottom: 20px;
  text-align: center;
`;

// Grid for skill cards
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

// Individual skill card styling
const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

// Icon styling
const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: #007aff; /* Apple-inspired blue */
`;

// Skill title styling
const SkillTitle = styled.h3`
  font-size: 1.1rem;
  color: #ffffff; /* White color for better visibility */
`;

// Define the skills component
function Skills() {
  // Array of skills with icons and titles
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Confluence', icon: <SiConfluence /> },
    { name: 'Jira', icon: <SiJira /> },
  ];

  return (
    <SkillsContainer id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <SkillGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillTitle>{skill.name}</SkillTitle>
          </SkillCard>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
}

export default Skills;