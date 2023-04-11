import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">BlogCheck</Navbar.Brand>
          <Nav className="text">
            <NavLink to='/' className="me-4 text-decoration-none">Home</NavLink>
            <NavLink to='/services' className="me-4 text-decoration-none">Services</NavLink>
            <NavLink to='/about' className="me-4 text-decoration-none">About</NavLink>
            <NavLink to='/contact' className="me-4 text-decoration-none">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;