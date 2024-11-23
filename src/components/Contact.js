import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  min-height: 100vh;
  padding: 50px 20px;
`;

const ContactTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(45deg, #00aaff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px rgba(0, 255, 255, 0.8);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ContactForm = styled(motion.form)`
  background: linear-gradient(135deg, #161b22, #20262d);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto; /* Ensure the form is centered horizontally */

  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 255, 255, 0.3);
  }
`;

const InputField = styled.input`
  width: 90%; /* Reduced horizontal size */
  padding: 15px;
  font-size: 16px;
  color: #ffffff;
  background: #1f252d;
  border: 2px solid #30363d;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin: 0 auto; /* Center the input field horizontally */

  &:focus {
    outline: none;
    border-color: #00aaff;
    box-shadow: 0px 4px 15px rgba(0, 170, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 90%; /* Reduced horizontal size */
  padding: 15px;
  font-size: 16px;
  color: #ffffff;
  background: #1f252d;
  border: 2px solid #30363d;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin: 0 auto; /* Center the text area horizontally */

  &:focus {
    outline: none;
    border-color: #00aaff;
    box-shadow: 0px 4px 15px rgba(0, 170, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 90%; /* Match the size of input fields */
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: #238636;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    background: #2ea043;
    box-shadow: 0px 4px 15px rgba(0, 255, 0, 0.5);
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </ContactTitle>
      <ContactForm
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InputField type="text" placeholder="Your Name" required />
        <InputField type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;