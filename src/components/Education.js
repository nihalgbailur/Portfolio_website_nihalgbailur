import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);
  color: #fff;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
  color: #00aaff;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 10px rgba(0, 255, 255, 0.7), 0px 0px 20px rgba(0, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const EducationCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  padding: 40px 20px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 10px 40px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 25px 10px;
  }
`;

const DateBubble = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;
  text-shadow: 0px 0px 5px rgba(0, 255, 255, 0.6);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
    top: 8px;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 6px;
    top: 6px;
    left: 10px;
  }
`;

const Institution = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  color: #fff;
  text-shadow: 0px 0px 10px rgba(0, 255, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Degree = styled.h3`
  font-size: 20px;
  color: #00ffaa;
  margin-bottom: 10px;
  text-shadow: 0px 0px 10px rgba(0, 255, 170, 0.7);

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, #00aaff, #00ffaa);
  margin: 20px 0;
`;

// Component
const Education = memo(() => {
  const education = [
    {
      date: "2018 - 2020",
      institution: "RV College Of Engineering",
      degree: "Master of Technology - MTech, Information Technology",
      description:
        "Focused on advanced computational systems and modern IT frameworks. Specialized in cloud computing, AI, and scalable software solutions.",
    },
    {
      date: "2014 - 2018",
      institution: "Jawaharlal Nehru National College of Engineering",
      degree: "Bachelor of Engineering - BE, Computer Science",
      description:
        "Learned core computer science concepts including algorithms, data structures, and web development. Gained hands-on experience in building software projects.",
    },
  ];

  return (
    <EducationContainer id="education">
      <Title
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Education
      </Title>
      <EducationWrapper>
        {education.map((edu, index) => (
          <React.Fragment key={index}>
            <EducationCard>
              <DateBubble>{edu.date}</DateBubble>
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <Description>{edu.description}</Description>
            </EducationCard>
            {index < education.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </EducationWrapper>
    </EducationContainer>
  );
});

export default Education;