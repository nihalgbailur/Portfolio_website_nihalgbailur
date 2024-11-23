import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PublicationsContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-height: 100vh;
`;

const PublicationsTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px rgba(0, 255, 255, 0.8);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const PublicationCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, #161b22, #20262d);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px rgba(0, 255, 255, 0.3);
  }
`;

const PublicationTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`;

const PublicationDetails = styled.p`
  font-size: 16px;
  color: #c9d1d9;
  margin-top: 10px;
`;

const PublicationLink = styled.a`
  margin-top: 15px;
  display: inline-block;
  padding: 10px 15px;
  background-color: #238636;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2ea043;
    box-shadow: 0px 4px 15px rgba(0, 255, 0, 0.5);
  }
`;

function Publications() {
  const publications = [
    {
      id: "1",
      title: "Sentiment Analysis on Twitter Data using ML",
      details: "Published in IRJET, 2020",
      link: "https://www.irjet.net/archives/V7/i7/IRJET-V7I7767.pdf",
    },
  ];

  return (
    <PublicationsContainer>
      <PublicationsTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Publications
      </PublicationsTitle>
      <PublicationsGrid>
        {publications.map((publication) => (
          <PublicationCard
            key={publication.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PublicationTitle>{publication.title}</PublicationTitle>
            <PublicationDetails>{publication.details}</PublicationDetails>
            <PublicationLink href={publication.link} target="_blank" rel="noopener noreferrer">
              View Publication
            </PublicationLink>
          </PublicationCard>
        ))}
      </PublicationsGrid>
    </PublicationsContainer>
  );
}

export default Publications;