import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
  /* background-color: var(--green); */
  background: var(--green);
  background: linear-gradient(
    84deg,
    rgba(1, 105, 111, 1) 10%,
    rgba(83, 167, 171, 1) 50%,
    rgba(1, 105, 111, 1) 90%
  );
  padding: 0rem 4rem;
  font-size: 1.5rem;
  font-weight: 800;

  & .navbar-brand {
    border-radius: 100%;
    padding: 1rem;
    background-color: var(--light2);
    box-shadow: 0px 0px 26px 1px rgba(64, 27, 38, 1);
  }

  & .nav-link,
  .nav-pad {
    color: var(--light);
    padding: 1rem 2rem !important;
    border-bottom: 2px solid var(--contrast);
  }

  & .nav-link:hover {
    border: 2px solid var(--contrast);
    border-bottom: none;
    border-radius: 5px;
    box-shadow: 6px -3px 7px -1px #444444;
  }
`;
