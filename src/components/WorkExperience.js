import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkContainer = styled.div`
  height: 100vh;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #111;
  color: #fff;
`;

const Job = styled(motion.div)`
  margin-bottom: 30px;
`;

const JobTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const JobDetails = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <WorkContainer id="work" ref={ref}>
      <Job
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <JobTitle>Software Engineer at XYZ Corp</JobTitle>
        <JobDetails>
          [Job Description, achievements, technologies used]
        </JobDetails>
      </Job>
      {/* Add more jobs as needed */}
    </WorkContainer>
  );
}

export default WorkExperience;