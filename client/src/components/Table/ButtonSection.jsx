import { LargeButton, ButtonContainer } from "./style";

export function ButtonSection({ addRow }) {
  return (
    <ButtonContainer>
      <LargeButton data-cy="add-btn" onClick={() => addRow()}>
        <span className="material-symbols-outlined">add_circle</span>
      </LargeButton>
    </ButtonContainer>
  );
}
