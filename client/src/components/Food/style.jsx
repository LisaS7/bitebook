import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const StyledContainer = styled(Container)`
  padding: 3vw;

  @media only screen and (max-width: 600px) {
    table {
      padding: 0;
    }
  }
`;
