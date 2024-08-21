import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Skill = styled.div`
  margin-bottom: 15px;
`;

const SkillName = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const SkillLevel = styled.div`
  background-color: #e0e0e0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const SkillBar = styled.div`
  background-color: #0071e3;
  width: ${props => props.level || '0%'};
  height: 100%;
`;

function Skills() {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <Skill>
        <SkillName>Python</SkillName>
        <SkillLevel>
          <SkillBar level="90%" />
        </SkillLevel>
      </Skill>
      {/* Add more skills as needed */}
    </SkillsContainer>
  );
}

export default Skills;