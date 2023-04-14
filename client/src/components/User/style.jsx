import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
  width: 20%;

  & section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 30px;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & form > div {
    display: flex;
    justify-content: space-between;
  }

  .bottom-link {
    margin-top: 15px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
