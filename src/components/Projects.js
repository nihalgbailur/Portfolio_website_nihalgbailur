import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsContainer = styled.div`
  padding: 30px 0; /* Adjusted padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ProjectsTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px rgba(0, 255, 255, 0.8);
  margin-bottom: 40px; /* More space under the title */

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ensures responsive layout */
  gap: 20px; /* Space between cards */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Centers the grid on the page */
`;

const ProjectCard = styled(motion.div)`
  background: #161b22; /* Solid dark background color */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px rgba(0, 255, 255, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px; /* Adjusted image height */
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const ProjectContent = styled.div`
  padding: 15px; /* Inner padding for card content */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ProjectSubtitle = styled.p`
  font-size: 14px;
  color: #c9d1d9;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ViewButton = styled.a`
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #238636;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2ea043;
    box-shadow: 0px 4px 15px rgba(0, 255, 0, 0.5);
  }
`;

function Projects() {
  const projects = [
    {
      id: "1",
      title: "Prediction of Heart Disease",
      subtitle: "Using Tkinter and SVM Algorithm",
      image: "https://via.placeholder.com/300x200.png?text=Heart+Disease+Prediction",
      link: "https://github.com/nihalgbailur/Prediction-of-Cardiac-Arrhythmia-Heart-disease-type-using-Machine-learning-algorithm",
    },
    {
      id: "2",
      title: "Sentiment Analysis on Twitter Data",
      subtitle: "Using Naive Bayes Classifier & Flask",
      image: "https://via.placeholder.com/300x200.png?text=Twitter+Sentiment+Analysis",
      link: "https://github.com/nihalgbailur/Sentiment-analysis-on-twitter-data-using-flask",
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <ViewButton href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;