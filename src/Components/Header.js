import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="success" expand="sm">
      <Container>
        <Navbar.Brand href="/">Indiana Hikes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
