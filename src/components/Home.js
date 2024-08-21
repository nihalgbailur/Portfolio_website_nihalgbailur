import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('/path/to/your/image.jpg'); /* Add a background image */
  background-size: cover;
  color: #ffffff;
`;

const WelcomeText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

function Home() {
  return (
    <HomeContainer>
      <div>
        <WelcomeText>Welcome to My Portfolio</WelcomeText>
        <SubText>Python Enthusiast Advancing Automotive Safety Through ADAS Testing </SubText>
      </div>
    </HomeContainer>
  );
}

export default Home;