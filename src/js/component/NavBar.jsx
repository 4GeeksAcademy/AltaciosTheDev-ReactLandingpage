import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
                <Navbar.Brand href="#home">React-Nice Wallpapers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Service">Service</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Email us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Chat with us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Call us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Legacy contacts
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;