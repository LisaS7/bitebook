import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
  width: 30%;

  .bottom-link {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  & > div {
    display: flex;
    gap: 1rem;
  }
`;
