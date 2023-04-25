import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--green);
  padding: 1rem 4rem;
  font-size: 1.2rem;

  & .navbar-brand {
    border-radius: 100%;
    padding: 1rem;
    background-color: var(--platinum);
    box-shadow: 0px 0px 26px 1px rgba(64, 27, 38, 1);
  }

  & .nav-link,
  .nav-pad {
    color: var(--light);
    padding: 1rem 2rem !important;
    border-bottom: 2px solid var(--pink);
  }

  & .nav-link:hover {
    border: 2px solid var(--pink);
    border-bottom: none;
    box-shadow: -2px -5px 37px -6px rgba(0, 0, 0, 0.43);
  }
`;