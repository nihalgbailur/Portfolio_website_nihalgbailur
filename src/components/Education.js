import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import rvLogo from '../assets/rv-logo.png'; // Replace with the actual path to your RV logo
import jnnceLogo from '../assets/jnnce-logo.png'; // Replace with the actual path to your JNNCE logo

const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  width: 100%;
`;

const EducationCard = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: #1c1c1e;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Institution = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Degree = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Duration = styled.p`
  font-size: 16px;
  color: #999;
`;

function Education() {
  const education = [
    {
      name: 'RV College Of Engineering',
      logo: rvLogo,
      degree: 'Master of Technology - MTech, Information Technology',
      duration: '2018 - 2020',
    },
    {
      name: 'Jawaharlal Nehru National College of Engineering',
      logo: jnnceLogo,
      degree: 'Bachelor of Engineering - BE, Computer Science',
      duration: '2014 - 2018',
    },
  ];

  return (
    <EducationContainer id="education">
      <EducationWrapper>
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Logo src={edu.logo} alt={`${edu.name} logo`} />
            <Details>
              <Institution>{edu.name}</Institution>
              <Degree>{edu.degree}</Degree>
              <Duration>{edu.duration}</Duration>
            </Details>
          </EducationCard>
        ))}
      </EducationWrapper>
    </EducationContainer>
  );
}

export default Education;