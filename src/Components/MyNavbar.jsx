import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/avatar.svg"
export default function MyNavbar() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand>Tastebite</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto position-relative">
            <NavDropdown title="Homepage"></NavDropdown>
            <NavDropdown title="Recipe Page"></NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown"></NavDropdown>
            <Nav.Link>Buy</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pe-4" />
            <img src={img} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
