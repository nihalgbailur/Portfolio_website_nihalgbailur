import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
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

const Project = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ProjectTitle = styled.h3`
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

const ProjectDetails = styled.p`
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

const ProjectLink = styled.a`
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

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <Project>
        <ProjectTitle>Project Name</ProjectTitle>
        <ProjectDetails>
          [Description of the project, technologies used, and your role.]
        </ProjectDetails>
        <ProjectLink href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </ProjectLink>
      </Project>
      {/* Add more projects as needed */}
    </ProjectsContainer>
  );
}

export default Projects;