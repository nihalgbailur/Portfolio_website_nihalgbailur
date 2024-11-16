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
  justify-content: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.1); /* Frosted glass effect */
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: #fff; /* Set text color to white */
  max-width: 1000px;
  margin: 60px auto;
`;

// Title styling
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #56ccf2, #2f80ed); /* Blue to Purple Gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  text-align: center;
`;

// Grid for skill cards
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

// Icon styling
const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 15px;
  color: #007aff; /* Apple-inspired blue */
  transition: color 0.2s ease;
  ${SkillCard}:hover & {
    color: #34e89e; /* Light green on hover */
  }
`;

// Skill title styling
const SkillTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
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