import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top" style={{padding: '0rem 2rem'}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <NavDropdown title="My projects" id="basic-nav-dropdown">
              <NavDropdown.Item className='dark' href="#projects/1">Smart Brain</NavDropdown.Item>
              <NavDropdown.Item className='dark' href="#projects/2">Project 2</NavDropdown.Item>
              <NavDropdown.Item className='dark' href="#projects/3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='dark' href="#projects/4">This Website</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/macas5?tab=repositories">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar;