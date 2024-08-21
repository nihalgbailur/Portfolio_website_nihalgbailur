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
  text-align: center;
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
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Title>About Me</Title>
        <SubText>
          I am a dedicated professional with a passion for [Your Passion].
          With [X] years of experience in [Your Field], I have honed my
          skills in [Key Skills] and am always eager to learn and take on new
          challenges.
        </SubText>
      </TextWrapper>
    </AboutContainer>
  );
}

export default AboutMe;