import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
`;

export const StyledTable = styled(Table)`
  background-color: var(--light);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  & td {
    padding: 10px 10px;
  }

  & .icon {
    font-size: 2rem;
  }

  .EmojiPickerReact {
    --epr-emoji-size: 1.5rem;
  }
`;

export const EmojiPickerContainer = styled.td`
  position: relative;
  height: 2rem;

  & #toggle-emoji {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-size: 2rem;
  }
`;

export const AbsolutePicker = styled.div`
  position: absolute;
`;

export const RatingRadioButtons = styled(Form.Check)`
  display: flex;
  & input[name="rating"] {
    display: none;
  }
`;

export const Circle = styled.span`
  display: inline-flex;
  background-color: ${(props) => props.colour};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-right: 20px;
`;
