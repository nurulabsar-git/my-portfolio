import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (

<div>
<Navbar collapseOnSelect expand="lg" bg="light" >
<Navbar.Brand href="/">Developer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-5"/>

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link href="/contactMe">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>    
</div>

    );
};

export default Header;