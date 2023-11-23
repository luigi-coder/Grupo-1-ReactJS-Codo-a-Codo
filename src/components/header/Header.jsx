import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png"
            alt="carrito"
            width="50px"
            height="50px"
          />
        </div>
        <Navbar.Brand href="#" className="tec">Tecno-<span className="cod">Code</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           {/* <Nav.Link href="#action2">Link</Nav.Link>  */}
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Help
              </NavDropdown.Item>
            </NavDropdown>
          
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
      
    </header>
  );
};
