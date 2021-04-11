import React, { useState } from 'react';
import {
  Collapse,
  Navbar as RSNav,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../styles/Navbar.css';

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="color">
      <RSNav light expand="md">
        <NavbarBrand href="/">Food Fiends</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Tools</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </RSNav>
    </div>
  );
}

export default Navbar;