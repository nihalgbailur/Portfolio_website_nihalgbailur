import React from 'react';
import styled from 'styled-components';

const PublicationsContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Publication = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 22px;
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

const Journal = styled.p`
  font-size: 16px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

const PublicationLink = styled.a`
  color: #0071e3;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

function Publications() {
  return (
    <PublicationsContainer>
      <h2>Paper Publications</h2>
      <Publication>
        <PublicationTitle>Paper Title</PublicationTitle>
        <Journal>Journal/Conference Name, Year</Journal>
        <PublicationLink href="https://link-to-paper" target="_blank" rel="noopener noreferrer">
          Read More
        </PublicationLink>
      </Publication>
      {/* Add more publications as needed */}
    </PublicationsContainer>
  );
}

export default Publications;