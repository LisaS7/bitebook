import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & section {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
  }

  .existing-account {
    margin-top: 1rem;
  }
`;
