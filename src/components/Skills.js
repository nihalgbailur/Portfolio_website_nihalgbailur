import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 20px;
`;

const SkillsTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px rgba(0, 255, 255, 0.8);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #161b22;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px rgba(0, 255, 255, 0.3);
  }
`;

const SkillLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
`;

const SkillName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

function Skills() {
  const skills = [
    {
      id: "1",
      name: "GitHub",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // Updated GitHub logo
    },
    {
      id: "2",
      name: "Python",
      logo: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png", // Updated Python logo
    },
    {
      id: "3",
      name: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      id: "4",
      name: "React",
      logo: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    },
    {
      id: "5",
      name: "SQL",
      logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    },
  ];

  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.id}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;