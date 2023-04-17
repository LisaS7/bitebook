import { useState } from "react";
import Form from "react-bootstrap/Form";
import EmojiPicker from "emoji-picker-react";
import {
  AbsolutePicker,
  EmojiPickerContainer,
  RatingRadioButtons,
} from "./style";

export function EmojiInput({ value, changeIcon }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function toggleEmojiPicker() {
    setShowEmojiPicker(!showEmojiPicker);
  }

  return (
    <EmojiPickerContainer>
      <button id="toggle-emoji" onClick={toggleEmojiPicker}>
        {value}
      </button>
      <AbsolutePicker>
        {showEmojiPicker && (
          <EmojiPicker onEmojiClick={(emoji) => changeIcon(emoji.emoji)} />
        )}
      </AbsolutePicker>
    </EmojiPickerContainer>
  );
}

export function Dropdown({ items, keyName, fieldValue, changeValue }) {
  const options = items.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <td>
      <Form.Select value={fieldValue} onChange={(e) => changeValue(e, keyName)}>
        {options}
      </Form.Select>
    </td>
  );
}

export function ObjectDropdown({ keyName, items, fieldValue, changeValue }) {
  const options = items.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  return (
    <td>
      <Form.Select
        defaultValue={fieldValue.id}
        onChange={(e) => changeValue(e, keyName)}
      >
        {options}
      </Form.Select>
    </td>
  );
}

export function Input({ keyName, fieldValue, changeValue }) {
  return (
    <td>
      <Form.Control
        type="text"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

export function TextArea({ keyName, fieldValue, changeValue }) {
  return (
    <td>
      <Form.Control
        as="textarea"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

export function DateInput({ keyName, fieldValue, changeValue }) {
  return (
    <td>
      <Form.Control
        type="date"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

export function RatingInput({ keyName, value, options, itemId, changeValue }) {
  const elements = options.map((option, index) => (
    <Form.Label key={keyName + index}>
      {option <= value ? "🟢" : "⚪"}{" "}
      <RatingRadioButtons
        inline
        key={index}
        type="radio"
        name="rating"
        id={option + itemId}
        value={option}
        onClick={(e) => changeValue(e, keyName)}
      />
    </Form.Label>
  ));
  return (
    <td>
      <div>{elements}</div>
    </td>
  );
}
