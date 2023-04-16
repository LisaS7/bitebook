import Form from "react-bootstrap/Form";
import styled from "styled-components";

export const EmojiPickerContainer = styled.td`
  position: relative;
  height: 2rem;
`;

export const AbsolutePicker = styled.div`
  position: absolute;
`;

export const RatingRadioButtons = styled(Form.Check)`
  & input[name="rating"] {
    display: none;
  }
`;
