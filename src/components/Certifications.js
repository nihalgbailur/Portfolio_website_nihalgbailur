import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import hackerRankLogo from "../assets/hackerrank-logo.png";
import courseraLogo from "../assets/coursera.png";
import udemyLogo from "../assets/udemy-logo.png";

// Styled Components
const CertificationsContainer = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #000, #111);
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
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const CertificationCard = styled(motion.a)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #1e1e1e, #2c2c2e);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
  }
`;

const Logo = styled(motion.img)`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%; /* Ensures proper spacing for the content */
  overflow: hidden; /* Prevents overflow for long text */
`;

const CertificateTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-align: left;
  word-wrap: break-word;
  word-break: break-word; /* Ensures long words are broken into lines */
  white-space: normal; /* Ensures the text wraps to the next line if needed */

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

const Issuer = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const IssuedDate = styled.p`
  font-size: 16px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function Certifications() {
  const certifications = [
    {
      name: "Python(Basic) Certificate",
      logo: hackerRankLogo,
      issuer: "HackerRank",
      issuedDate: "Issued Nov 2021",
      link: "https://www.hackerrank.com/certificates/DF7F29795DEE",
    },
    {
      name: "Getting Started with AWS Machine Learning",
      logo: courseraLogo,
      issuer: "Coursera",
      issuedDate: "Issued Jun 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/AXUDSPTNMR3Y",
    },
    {
      name: "Machine Learning A-Z: Hands-On Python & R In Data Science",
      logo: udemyLogo,
      issuer: "Udemy",
      issuedDate: "Issued Jan 2019",
      link: "https://www.udemy.com/certificate/UC-UOHZKCAG/",
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
          <CertificationCard
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <Logo
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              whileHover={{ scale: 1.1 }}
            />
            <Details>
              <CertificateTitle>{cert.name}</CertificateTitle>
              <Issuer>{cert.issuer}</Issuer>
              <IssuedDate>{cert.issuedDate}</IssuedDate>
            </Details>
          </CertificationCard>
        ))}
      </CertificationsWrapper>
    </CertificationsContainer>
  );
}

export default Certifications;