import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.png";
import Login from "../../views/login/login";

import { logOut } from "../../utils/utilsFunctions";
import { useEffect } from "react";
import { isAuthenticated } from "../../utils/utilsFunctions";
import RoutesName from "../../routes/routesName";
const Header = () => {
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
                  <Nav.Link>
                    {" "}
                    <Link to="/" className="navlinks">
                      {" "}
                      Home{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/contact" className="navlinks">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/about" className="navlinks">
                      {" "}
                      About Us{" "}
                    </Link>
                  </Nav.Link>
                </Nav>
                {!isAuthenticated() ? (
                  <div>
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
                        <Button variant="outline-light">
                          <Link to="/register" className="regisBtn">
                            Register{" "}
                          </Link>
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
                        <Button variant="outline-success">
                          <Link
                            to="/register"
                            className=" register-mobile-class"
                          >
                            Register{" "}
                          </Link>{" "}
                        </Button>
                      </Form>
                    </div>
                  </div>
                ) : (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-basic"
                    >
                      Well Come {localStorage.getItem("user_name")}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        {localStorage.getItem("type") === "3" ? (
                          <Link
                            to={RoutesName.AdminDashboard.route}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Dashboard
                          </Link>
                        ) : (
                          ""
                        )}
                        {localStorage.getItem("type") === "2" ? (
                          <Link
                            to={RoutesName.StudentDashboard.route}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Dashboard
                          </Link>
                        ) : (
                          ""
                        )}
                        {localStorage.getItem("type") === "1" ? (
                          <Link
                            to={RoutesName.TeacherDashboard.route}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Dashboard
                          </Link>
                        ) : (
                          ""
                        )}
                      </Dropdown.Item>
                      <Dropdown.Item href="/" onClick={logOut}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

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
