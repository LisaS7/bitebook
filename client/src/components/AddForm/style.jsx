import Form from "react-bootstrap/Form";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  gap: 2rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .rating-box {
    display: flex;
    flex-direction: column;
  }

  & input[name="rating"] {
    display: none;
  }
`;
