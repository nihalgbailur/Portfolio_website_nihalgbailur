import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Project = styled.div`
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ProjectDetails = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

const ProjectLink = styled.a`
  color: #0071e3;
  &:hover {
    text-decoration: underline;
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