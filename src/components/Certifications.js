import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import hackerRankLogo from '../assets/hackerrank-logo.png';
import courseraLogo from '../assets/coursera.png';
import udemyLogo from '../assets/udemy-logo.png';

const CertificationsContainer = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
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

const CertificationCard = styled(motion.div)`
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

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;

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
`;

const CertificateTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

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

const CredentialID = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const CredentialLink = styled.a`
  font-size: 16px;
  color: #0071e3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

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
      name: 'Python (Basic) Certificate',
      logo: hackerRankLogo,
      issuer: 'HackerRank',
      issuedDate: 'Issued Nov 2021',
      credentialID: 'DF7F29795DEE',
      link: 'https://www.hackerrank.com/certificates/DF7F29795DEE',
    },
    {
      name: 'Getting Started with AWS Machine Learning',
      logo: courseraLogo,
      issuer: 'Coursera',
      issuedDate: 'Issued Jun 2021',
      credentialID: 'AXUDSPTNMR3Y',
      link: 'https://www.coursera.org/account/accomplishments/certificate/AXUDSPTNMR3Y',
    },
    {
      name: 'Machine Learning A-Z: Hands-On Python & R In Data Science',
      logo: udemyLogo,
      issuer: 'Udemy',
      issuedDate: 'Issued Jan 2019',
      credentialID: 'AXUDSPTNMR3Y',
      link: 'https://www.udemy.com/certificate/UC-UOHZKCAG/',
    },
  ];

  return (
    <CertificationsContainer id="certifications">
      <CertificationsWrapper>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Logo src={cert.logo} alt={`${cert.issuer} logo`} />
            <Details>
              <CertificateTitle>{cert.name}</CertificateTitle>
              <Issuer>{cert.issuer}</Issuer>
              <IssuedDate>{cert.issuedDate}</IssuedDate>
              <CredentialID>Credential ID: {cert.credentialID}</CredentialID>
              <CredentialLink href={cert.link} target="_blank" rel="noopener noreferrer">
                Show credential
              </CredentialLink>
            </Details>
          </CertificationCard>
        ))}
      </CertificationsWrapper>
    </CertificationsContainer>
  );
}

export default Certifications;