import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import logo from "../assets/logo.png";
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header style={{ color: "white" }}>
      <Navbar style={{ background: "#000000" }} expand="lg" collapseOnSelect>
        <img src={logo} width="100px" height="100px" align="left" />
        <Container>
          <Link to="/">
            <>
              <Navbar.Brand style={{ color: "white" }}>Split Bean</Navbar.Brand>
            </>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />

            <div style={{ margin: "3rem" }}>
              <Link to="/know-your-coffee" style={{ color: "white" }}>
                Know Your Coffee
              </Link>
            </div>

            <Nav className="ml-auto">
              <LinkContainer
                style={{ color: "white", marginRight: "1rem" }}
                to="/cart"
              >
                <Nav.Link>
                  <i
                    style={{ color: "white" }}
                    className="fas fa-shopping-cart"
                  ></i>{" "}
                  Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  style={{ background: "white", color: "black" }}
                  title={userInfo.name}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer style={{ color: "white" }} to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" style={{ color: "white" }}></i>{" "}
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
