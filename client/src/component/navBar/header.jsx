import React from 'react';
import "./header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/logo.png";
import { AiTwotoneHome } from "react-icons/ai";
import Login from '../../views/login/login';
const Header= () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          expand={expand}
          className="navbar-class"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} width="75px" height="50px"></img>
              <span className="title-class">TES</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                style={{ borderBottom: "2px solid grey" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  TES
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/" className="navlinks">
                    {" "}
                    Home
                  </Nav.Link>

                  <Nav.Link href="/contact" className="navlinks">
                    Contact Us
                  </Nav.Link>
                  <Nav.Link href="/about" className="navlinks">
                    About Us
                  </Nav.Link>
                </Nav>
                <div className="display-for-large-device">
                  <Form className="d-flex ">
                    <Button
                      variant="outline-light"
                      bg="blue"
                      style={{ marginRight: "10px" }}
                      onClick={() => setModalShow(true)}
                    >
                      Login
                    </Button>
                    <Button variant="outline-light" bg="blue">
                      Register
                    </Button>
                  </Form>
                </div>

                <div className="display-for-mobile">
                  <Form className="d-flex ">
                    <Button
                      variant="outline-success"
                      style={{ marginRight: "10px" }}
                      onClick={() => setModalShow(true)}
                    >
                      Login
                    </Button>
                    <Button variant="outline-success">Register</Button>
                  </Form>
                </div>
                <Login show={modalShow} onHide={() => setModalShow(false)} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
