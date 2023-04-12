import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const StyledContainer = styled(Container)`
  padding: 3vw;

  & td:nth-child(8) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;
