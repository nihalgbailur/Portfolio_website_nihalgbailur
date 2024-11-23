import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled Components
const WorkExperienceContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000, #111);
  color: #fff;
  text-align: center;
  padding: 40px 20px;
`;

const Heading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const WorkList = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const WorkItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  border-radius: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);
  text-align: left;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, rgba(0, 170, 255, 0.1), rgba(0, 255, 170, 0.1));
    transform: scale(1.02);
    box-shadow: 0px 12px 40px rgba(0, 255, 255, 0.3);
  }
`;

const Position = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #56ccf2;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Company = styled.h3`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Component
function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const workExperiences = [
    {
      position: "Engineer",
      company: "Continental · Full-time",
      duration: "Dec 2021 - Present · 2 yrs 9 mos",
      description:
        "ADAS testing with over 2.9 years of experience, leveraging Python scripting for efficient test automation. Proficient in Git and GitHub for streamlined collaboration and experienced in using MTS and CarMaker tools.",
    },
    {
      position: "Student Intern",
      company: "GRID R&D · Internship",
      duration: "Oct 2019 - Dec 2019 · 3 mos",
      description:
        "Contributed to two pioneering projects, gaining hands-on experience in stock trading, real-time stock prediction using PyQt5, NLP-based sentiment analysis on Twitter data, and implementing a Flask backend for secure login credentials generation.",
    },
  ];

  return (
    <WorkExperienceContainer id="work-experience">
      <Heading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Work Experience
      </Heading>
      <WorkList>
        {workExperiences.map((work, index) => (
          <WorkItem
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <Position>{work.position}</Position>
            <Company>{work.company}</Company>
            <Duration>{work.duration}</Duration>
            <Description>{work.description}</Description>
          </WorkItem>
        ))}
      </WorkList>
    </WorkExperienceContainer>
  );
}

export default WorkExperience;