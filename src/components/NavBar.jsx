import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { LogoutUser, reset } from "../features/authSlice";

const NavBar = ({ onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogoutUser());
    dispatch(reset());
    navigate("/", replace);
  };
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Button variant="outline-light" onClick={onClick}>
          <FaBars />
        </Button>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="text-light fs-3 fw-bold">
            Product
          </Navbar.Brand>
          <Button variant="outline-light" onClick={logout}>
            Logout
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavBar;
