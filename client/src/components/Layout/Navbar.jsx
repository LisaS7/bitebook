import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { StyledNavbar } from "./style";

function UserActions({ user }) {
  if (!user) {
    return (
      <Nav className="ms-auto">
        <Nav.Link data-cy="nav-login" as={Link} to="/">
          Login
        </Nav.Link>
        <Nav.Link data-cy="nav-register" as={Link} to="/register">
          Register
        </Nav.Link>
      </Nav>
    );
  }
  return (
    <Nav className="ms-auto">
      <div className="nav-pad"> </div>
      <Nav.Link data-cy="nav-profile" as={Link} to="/profile">
        Profile
      </Nav.Link>
      <Nav.Link data-cy="nav-logout" onClick={() => logout()}>
        Logout
      </Nav.Link>
      <div className="nav-pad"> </div>
    </Nav>
  );
}

export default function CustomNavbar() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {}, [user, loading]);

  return (
    <StyledNavbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src="/logo.png" width="30" alt="BiteBook logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="nav-pad"> </div>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link data-cy="foods-link" href="/foods">
              Food
            </Nav.Link>
            <Nav.Link data-cy="bites-link" href="/bites">
              Bites
            </Nav.Link>
            <Nav.Link data-cy="dashboard-link" href="/dashboard">
              Dashboard
            </Nav.Link>
            <div className="nav-pad"> </div>
          </Nav>
          <UserActions user={user} />
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
