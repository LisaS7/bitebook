import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 30px;
  }

  .google-button {
    background-color: var(--google-button);
  }

  .forgot-password {
    margin-top: 15px;
  }
`;
