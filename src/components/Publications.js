import React from 'react';
import styled from 'styled-components';

const PublicationsContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Publication = styled.div`
  margin-bottom: 30px;
`;

const PublicationTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Journal = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

const PublicationLink = styled.a`
  color: #0071e3;
  &:hover {
    text-decoration: underline;
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