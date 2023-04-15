import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--platinum);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 1rem;
`;

export const MainContainer = styled.main`
  max-width: 1320px;
  margin: auto;
  padding: 3rem;
`;
