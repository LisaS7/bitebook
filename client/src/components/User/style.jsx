import styled from "styled-components";

export const StyledContainer = styled.div`
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

  .bottom-link {
    margin-top: 15px;
  }
`;
