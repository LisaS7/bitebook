import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
  width: 30%;

  & section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 30px;
  }

  .bottom-link {
    margin-top: 15px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 1rem;
  }
`;
