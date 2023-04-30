import styled from "styled-components";

export const HeadingContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: white;

  & div {
    display: flex;
    flex-direction: column;
  }

  & button {
    height: 20px;
    padding: 0;
  }

  & .material-symbols-outlined {
    color: var(--pink);
  }
`;

export const StyledHead = styled.thead`
  background-color: var(--green);

  & tr > th {
    padding: 1rem;
  }
`;
