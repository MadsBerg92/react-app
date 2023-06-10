import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import styles from "./NavBar.module.css";

// interface OptionsProps {
//   scroll: true;
//   backdrop: true;
// }

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Navbar className={`${styles.navbar} ${styles.roundedNavbar}`} fixed="top">
      <img src="../../public/images/logo.PNG" alt="" className={styles.logo} />
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Vaser</Nav.Link>
            <Nav.Link href="#link">Kander</Nav.Link>
            <Nav.Link href="#link">Kopper</Nav.Link>
            <Nav.Link href="#link">Skåle</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Omkring produkterne
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Købsbetingelser
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mit værksted
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Omkring mig
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" onClick={toggleShow} className={styles.btn}>
          Side Menu
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
