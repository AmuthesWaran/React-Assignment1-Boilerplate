import React from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  
  // const Business = () => ({
    // onClick={Business}
  // }) 

  
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">News Feed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-2">
            <Nav.Link href="#home" className="ms-2" >Home</Nav.Link>
            <Nav.Link href="#" className="ms-2" >Trending</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown" className="ms-2" >
              <NavDropdown.Item href="#"  >Business</NavDropdown.Item>
              <NavDropdown.Item href="#">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="#">General</NavDropdown.Item>
              <NavDropdown.Item href="#">Health</NavDropdown.Item>
              <NavDropdown.Item href="#">Science</NavDropdown.Item>
              <NavDropdown.Item href="#">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#">Techonology</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex ms-5" >
            <Form.Control
              type="search"
              placeholder="Type here..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header