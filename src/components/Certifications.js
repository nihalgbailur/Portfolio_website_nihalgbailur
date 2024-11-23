import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const CertificationsContainer = styled.section`
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

const CertificationsWrapper = styled.div`
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

const CertificationLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

const CertificationCard = styled(motion.div)`
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

const CertificateName = styled.h2`
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

const Issuer = styled.h3`
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
const Certifications = memo(() => {
  const certifications = [
    {
      date: "Issued Nov 2021",
      name: "Python (Basic) Certificate",
      issuer: "HackerRank",
      description: "Validated knowledge of Python basics including data types, loops, and functions.",
      link: "https://www.hackerrank.com/certificates/DF7F29795DEE",
    },
    {
      date: "Issued Jun 2021",
      name: "AWS Machine Learning",
      issuer: "Coursera",
      description: "Completed foundational machine learning concepts using AWS tools and services.",
      link: "https://www.coursera.org/account/accomplishments/certificate/AXUDSPTNMR3Y",
    },
    {
      date: "Issued Jan 2019",
      name: "Machine Learning A-Z",
      issuer: "Udemy",
      description: "Gained practical experience in Python and R for machine learning algorithms.",
      link: "https://www.udemy.com/certificate/UC-8H9B5M7/",
    },
  ];

  return (
    <CertificationsContainer id="certifications">
      <Title
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Certifications
      </Title>
      <CertificationsWrapper>
        {certifications.map((cert, index) => (
          <React.Fragment key={index}>
            <CertificationLink href={cert.link} target="_blank" rel="noopener noreferrer">
              <CertificationCard>
                <DateBubble>{cert.date}</DateBubble>
                <CertificateName>{cert.name}</CertificateName>
                <Issuer>{cert.issuer}</Issuer>
                <Description>{cert.description}</Description>
              </CertificationCard>
            </CertificationLink>
            {index < certifications.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CertificationsWrapper>
    </CertificationsContainer>
  );
});

export default Certifications;