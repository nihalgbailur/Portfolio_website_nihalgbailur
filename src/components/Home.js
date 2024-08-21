import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BubbleEffect from './BubbleEffect';

const HomeContainer = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  overflow: hidden; /* Ensure the bubbles stay within the viewport */

  @media (max-width: 768px) {
    padding: 50px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #333;
  z-index: 1; /* Ensure the image stays above the bubbles */

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
  background: linear-gradient(45deg, #00aaff, #00ffaa); /* Gradient effect */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1; /* Ensure the text stays above the bubbles */

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
        scale: 1.2, // Scale up the image and text
        transition: { duration: 1 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [controls, inView]);

  return (
    <HomeContainer id="home">
      <BubbleEffect /> {/* Adding the bubble effect as a background */}
      <ImageWrapper ref={ref} animate={controls}>
        <Image src="your-photo.jpg" alt="Your Name" />
      </ImageWrapper>
      <Text animate={controls}>
        Welcome to My Portfolio
      </Text>
    </HomeContainer>
  );
}

export default Home;