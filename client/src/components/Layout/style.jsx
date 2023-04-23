import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--platinum);
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */

  padding: 0;
  padding-top: 1rem;

  & .nav-link,
  .nav-pad {
    color: var(--dark);
    padding: 1rem 2rem !important;
    border-bottom: 2px solid var(--green);
  }

  & .nav-link:hover {
    border: 2px solid var(--green);
    border-bottom: none;
    box-shadow: -2px -5px 37px -6px rgba(0, 0, 0, 0.43);
  }
`;

export const MainContainer = styled.main`
  max-width: 1420px;
  margin: auto;
  padding: 3rem;
`;

// ============  GLOBAL BUTTON STYLES  ============

export const ButtonControls = styled.section`
  display: flex;
  justify-content: flex-end;
`;

export const LargeButton = styled.button`
  background-color: transparent;

  & span {
    font-size: 2rem;
  }
`;
