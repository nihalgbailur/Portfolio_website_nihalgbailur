import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #000;
  &:hover {
    color: #0071e3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #000;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>My Portfolio</Logo>
        <Hamburger onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/work">Work Experience</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/certifications">Certifications</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;