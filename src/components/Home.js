import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeContainer = styled.section`
  height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0d0d0d; /* Black background */
  color: #fff; /* White text color */
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1); /* Light transparency for glassmorphic effect */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); /* Dark shadow for depth */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.2,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [controls, inView]);

  return (
    <HomeContainer id="home">
      <ImageWrapper ref={ref} animate={controls}>
        <Image src="your-photo.jpg" alt="Your Name" />
      </ImageWrapper>
      <Text animate={controls}>Welcome to My Portfolio</Text>
    </HomeContainer>
  );
}

export default Home;