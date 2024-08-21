import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #000;
  &:hover {
    color: #0071e3;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <NavLinks>
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
    </NavbarContainer>
  );
}

export default Navbar;