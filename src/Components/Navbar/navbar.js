import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  
  return (
    <Navbar collapseOnSelect expand="lg" style={{background:"#DEF5E5"}} variant="dark" >
      <Container>
        <Navbar.Brand href="#home" ></Navbar.Brand>
        <Link to="/" style={{textDecoration:"none"}}><h1 className='logoText' style={{fontFamily:"Roboto Slab, serif"}}><span style={{color:"black"}}>Clean</span>Sweep</h1></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav >
          <Link to="/" style={{textDecoration:"none"}}><Nav.Link href="/" className='navLink'>Home</Nav.Link></Link>
          <Link to="/show-timing" style={{textDecoration:"none"}}>  <Nav.Link eventKey={2} href="/" className='navLink'>
            BinMan-Timings
            </Nav.Link></Link>
            <Link to="/add-locality" style={{textDecoration:"none"}} >  <Nav.Link href="#features" className='navLink'>Add-Your-Locality</Nav.Link></Link>
            <Link to="/contact" style={{textDecoration:"none"}}><Nav.Link href="#pricing" className='navLink'>Share your Issue</Nav.Link></Link>
            {/* <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;