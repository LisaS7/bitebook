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

export const EmojiPickerContainer = styled.div`
  position: relative;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .EmojiPickerReact {
    --epr-emoji-size: 1.5rem;
  }
`;

export const AbsolutePicker = styled.div`
  position: absolute;
`;
