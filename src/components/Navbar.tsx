import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import logoDenta from '../assets/images/logoDenta.png';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const NavigationBar: React.FC = (): JSX.Element => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);

  const isActive = (path: string): boolean => location.pathname === path;

  const NavLinkItem: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => (
    <Nav.Link 
      as={Link} 
      to={to} 
      active={isActive(to)}
      className={className}
      onClick={onClick}
    >
      {children}
    </Nav.Link>
  );

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={(): void => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img 
            src={logoDenta} 
            alt="DENTA" 
            height="30" 
            className="d-inline-block align-top me-2"
          />
          DENTA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLinkItem to="/" onClick={(): void => setExpanded(false)}>
              Home
            </NavLinkItem>
            <NavLinkItem to="/about" onClick={(): void => setExpanded(false)}>
              About
            </NavLinkItem>
            <NavLinkItem to="/services" onClick={(): void => setExpanded(false)}>
              Services
            </NavLinkItem>
            <NavLinkItem to="/review" onClick={(): void => setExpanded(false)}>
              Reviews
            </NavLinkItem>
            <NavLinkItem to="/contact" onClick={(): void => setExpanded(false)}>
              Contact
            </NavLinkItem>
            <NavLinkItem 
              to="/appointment" 
              className="btn btn-primary ms-lg-3 appointment-btn"
              onClick={(): void => setExpanded(false)}
            >
              Make Appointment
            </NavLinkItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
