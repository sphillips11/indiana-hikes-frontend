import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./Header.css";
import "../index.css";
import Logout from "./Logout";
import Userfront from "@userfront/react";

const Header = (props) => {
  const currentHiker = props.currentHiker;

  return (
    <Navbar className="bg-green2" expand="sm">
      <Container>
        <Navbar.Brand href="/" className="p-0 mb-0 mt-1">
          <img
            className="logo"
            src="/images/Indiana_Hikes_logo.png"
            alt="Indiana Hikes logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {Userfront.accessToken() ? (
              <>
                <Button
                  href="/record-hike"
                  variant="warning"
                  className="text-green3"
                >
                  Record Hike
                </Button>
                <NavDropdown
                  title={
                    <span>
                      <img
                        className="icon-header"
                        src="/images/hiker_icon.png"
                        alt="Hiker icon"
                      />{" "}
                      {currentHiker.name}
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/hiker" className="text-green2">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/hikes" className="text-green2">
                    Your Hikes
                  </NavDropdown.Item>
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
