import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const StyledContainer = styled(Container)`
  & td {
    vertical-align: middle;
  }

  & input {
    max-width: 6rem;
  }

  & textarea {
    padding: 0.5rem;
  }

  & .small-cell {
    text-align: center;
    width: 60px;
  }

  & .small-text {
    font-size: 0.8rem;
  }
`;
