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
      <button
        data-cy="toggle-icon"
        id="toggle-emoji"
        onClick={toggleEmojiPicker}
      >
        {value || "🍽"}
      </button>
      <AbsolutePicker>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiClick={(emoji) => {
              changeIcon(emoji.emoji);
              setShowEmojiPicker(false);
            }}
          />
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
      <Form.Select
        data-cy={`input-${keyName}`}
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      >
        {options}
      </Form.Select>
    </td>
  );
}

export function ObjectDropdown({ keyName, items, fieldValue, changeValue }) {
  const options = items.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name} {item.detail && " - " + item.detail}
    </option>
  ));

  return (
    <td>
      <Form.Select
        data-cy={`input-${keyName}`}
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
        data-cy={`input-${keyName}`}
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
        data-cy={`input-${keyName}`}
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
        data-cy={`input-${keyName}`}
        type="date"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

export function RatingInput({ keyName, value, options, itemId, changeValue }) {
  const elements = options.map((option, index) => (
    <Form.Label data-cy={"rating" + index} key={keyName + index}>
      {option <= value ? "🟢" : "⚪"}{" "}
      <RatingRadioButtons
        inline
        key={index}
        type="radio"
        name="rating"
        id={option + itemId}
        value={option}
        data-cy={`input-${keyName}-${option}`}
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
