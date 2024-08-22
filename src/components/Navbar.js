import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  background:  rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: ${(props) => (props.active ? '#080a09' : '#fff')}; /* Active link is blue, others are white */
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-decoration: none;

  &:hover {
    color: #080a09;
  }
`;

function Navbar({ activeSection }) {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink href="#home" active={activeSection === 'home'}>
          Home
        </NavLink>
        <NavLink href="#about" active={activeSection === 'about'}>
          About Me
        </NavLink>
        <NavLink href="#work" active={activeSection === 'work'}>
          Work Experience
        </NavLink>
        <NavLink href="#skills" active={activeSection === 'skills'}>
          Skills
        </NavLink>
        <NavLink href="#education" active={activeSection === 'education'}>
          Education
        </NavLink>
        <NavLink href="#certifications" active={activeSection === 'certifications'}>
          Certifications
        </NavLink>
        <NavLink href="#projects" active={activeSection === 'projects'}>
          Projects
        </NavLink>
        <NavLink href="#publications" active={activeSection === 'publications'}>
          Publications
        </NavLink>
        <NavLink href="#contact" active={activeSection === 'contact'}>
          Contact
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;