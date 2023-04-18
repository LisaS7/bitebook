import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

export const StyledTable = styled(Table)`
  & td,
  th {
    padding: 10px 20px;
  }

  .EmojiPickerReact {
    --epr-emoji-size: 1.5rem;
  }
`;

export const EmojiPickerContainer = styled.td`
  position: relative;
  height: 2rem;
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
