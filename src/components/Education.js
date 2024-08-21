import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Degree = styled.div`
  margin-bottom: 30px;
`;

const DegreeTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Institution = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

function Education() {
  return (
    <EducationContainer>
      <h2>Education</h2>
      <Degree>
        <DegreeTitle>Bachelor of Science in Computer Science</DegreeTitle>
        <Institution>University Name, Graduation Year</Institution>
      </Degree>
      {/* Add more degrees as needed */}
    </EducationContainer>
  );
}

export default Education;