import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--platinum);
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
  padding: 1rem 2rem;
`;

export const LargeButton = styled.button`
  background-color: transparent;

  & span {
    font-size: 2rem;
  }
`;
