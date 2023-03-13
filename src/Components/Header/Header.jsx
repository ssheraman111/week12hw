import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Link to="/card-list">
            <Navbar.Brand>Main page</Navbar.Brand>
          </Link>
          <Link to="/about-us">
            <Navbar.Brand>About us</Navbar.Brand>
          </Link>
          <Link to="/add-blog">
            <Navbar.Brand>Add Blog</Navbar.Brand>
          </Link>
          <Link to="/contacts">
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
