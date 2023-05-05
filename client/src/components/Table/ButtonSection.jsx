import { ButtonContainer } from "./style";

export function ButtonSection({ addRow }) {
  return (
    <ButtonContainer>
      <button className="icon-btn" data-cy="add-btn" onClick={() => addRow()}>
        <span className="icon-size2 material-symbols-outlined">add_circle</span>
      </button>
    </ButtonContainer>
  );
}
