import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./Header.css";
import Logout from "./Logout";
import Userfront from "@userfront/react";

const Header = (props) => {
  const currentHiker = props.currentHiker;

  return (
    <Navbar bg="success" expand="sm">
      <Container>
        <Navbar.Brand href="/" className="p-0 mb-0 mt-1">
          <img
            className="logo"
            src="/images/logo_draft.png"
            alt="Indiana Hikes logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {Userfront.accessToken() ? (
              <>
                <Button href="/record-hike" variant="warning">
                  Record Hike
                </Button>
                <NavDropdown
                  title={
                    <span>
                      <img
                        className="icon"
                        src="/images/hiker_icon.png"
                        alt="Hiker icon"
                      />{" "}
                      {currentHiker.name}
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/hiker">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/hikes">Your Hikes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Logout />
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
