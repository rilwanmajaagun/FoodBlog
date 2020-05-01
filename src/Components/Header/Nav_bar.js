import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom'

const Nav_bar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">Welcome to My blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-uppercase ml-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button  variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Nav_bar
