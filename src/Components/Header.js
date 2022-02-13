import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  return (
    <Navbar bg="success" expand="sm">
      <Container>
        <Navbar.Brand href="/">Indiana Hikes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown
              title={
                <span>
                  <img
                    className="icon"
                    src="images/hiker_icon.png"
                    alt="Hiker icon"
                  />{" "}
                  "hiker.name"
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/hikers/{hiker.id}">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/hikers/{hiker.id}/hikes">
                Hikes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
