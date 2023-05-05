import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { auth, logout } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { StyledNavbar } from "./navbar.style";
import PersonSelector from "./PersonSelector";

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
      <PersonSelector />
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
    <StyledNavbar className="noPrint" expand="lg">
      <Navbar.Brand data-cy="home-link" as={Link} to="/home">
        <img src="/logo.svg" width="60" alt="BiteBook logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Food" id="basic-nav-dropdown">
            <NavDropdown.Item id="dropdown-item" as={Link} to="/foods">
              Detail
            </NavDropdown.Item>
            <NavDropdown.Item
              id="dropdown-item"
              as={Link}
              to="/foods/categories/test"
            >
              Categories
            </NavDropdown.Item>
            <NavDropdown.Item id="dropdown-item" as={Link} to="/foods/report">
              Report
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/bites" data-cy="bites-link">
            Bites
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" data-cy="dashboard-link">
            Dashboard
          </Nav.Link>
        </Nav>
        <UserActions user={user} />
      </Navbar.Collapse>
    </StyledNavbar>
  );
}
