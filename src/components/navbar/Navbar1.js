import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function Navbar1() {
  return ( 
    <>
    <Navbar expand="lg" style={{backgroundColor:'#9FA8DA'}}>
      <Container fluid>
        <Navbar.Brand href="#">Protfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link}to={'/'}>Home</Nav.Link>
            <NavDropdown title="Gallary" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'/Project'}>projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/Internship'}>
                Internship
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}to={'/Some'}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
    
  );
}

export default Navbar1;