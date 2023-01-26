import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">PreBuilts</Nav.Link>
            <Nav.Link href="#link">Intel Custom PCs</Nav.Link>
            <Nav.Link href="#link1">AMD Custom PCs</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="../../ContactForm.js">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Return & Refund Policy</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Button variant="success">View Cart</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;