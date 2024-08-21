import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &.dimmed {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const ProjectTitle = styled(motion.h3)`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProjectButton = styled(motion.button)`
  padding: 10px 20px;
  background-color: #0071e3;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ExpandedProject = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: '1',
      title: 'Prediction of heart disease',
      subtitle: 'Using Tkinter and SVM algo',
      details: 'Deploy an ML Model to predict Heart disease using SVM with an accuracy of 53.63% tested on a dataset of 500 sample Created a GUI Using Tkinter.',
      link: 'https://github.com/nihalgbailur/Prediction-of-Cardiac-Arrhythmia-Heart-disease-type-using-Machine-learning-algorithm',
    },
    {
      id: '2',
      title: 'Sentiment Analysis on Twitter Data',
      subtitle: 'Use Naive Bayes Classifier & Flask',
      details: 'Implemented backend development Using Flask to generate login credentials Using Tweepy API dynamically take the tweets & Use Naive Bayes Classifier & NLTK to classify b/w Positives, Negative & Neutral',
      link: 'https://github.com/nihalgbailur/Sentiment-analysis-on-twitter-data-using-flask',
    }
  ];

  return (
    <ProjectsContainer>
      {items.map((item) => (
        <ProjectCard
          key={item.id}
          className={selectedId && selectedId !== item.id ? 'dimmed' : ''}
          onClick={() => setSelectedId(item.id)}
        >
          <ProjectTitle>{item.title}</ProjectTitle>
          <ProjectButton>View Project</ProjectButton>
        </ProjectCard>
      ))}

      <AnimatePresence>
        {selectedId && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <ExpandedProject
              layoutId={selectedId}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <h2>{items.find(item => item.id === selectedId).title}</h2>
              <p>{items.find(item => item.id === selectedId).details}</p>
              <a href={items.find(item => item.id === selectedId).link} target="_blank" rel="noopener noreferrer">
                Visit GitHub
              </a>
              <br /><br />
              <motion.button onClick={() => setSelectedId(null)} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#0071e3', color: '#fff', border: 'none', borderRadius: '12px' }}>
                Close
              </motion.button>
            </ExpandedProject>
          </Overlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
}

export default Projects;