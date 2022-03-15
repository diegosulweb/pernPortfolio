import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="navBar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">App Deck</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navigation me-auto">
            <Link to="/">Home</Link>
            <Link to="/todo">To do</Link>
            <Link to="/word5">Word5</Link>
            <Link to="/issues">Issue Handler</Link>
            <Link to="/testcss">Test Css</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
