import { useState } from "react";
import Form from "react-bootstrap/Form";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AbsolutePicker, EmojiPickerContainer } from "./style";

export function EmojiInput({ value }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  console.log(showEmojiPicker);

  function toggleEmojiPicker() {
    console.log("toggle called");
    setShowEmojiPicker(!showEmojiPicker);
  }

  function handleOutsideClick(e) {
    console.log("target", e.target.id);
    if (e.target.id !== "toggle-emoji") {
      toggleEmojiPicker();
    }
  }

  return (
    <EmojiPickerContainer>
      <button id="toggle-emoji" onClick={toggleEmojiPicker}>
        {value}
      </button>
      <AbsolutePicker>
        {showEmojiPicker && (
          <Picker
            data={data}
            theme="light"
            onEmojiSelect={console.log}
            onClickOutside={(e) => handleOutsideClick(e)}
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
      <Form.Select value={fieldValue} onChange={(e) => changeValue(e, keyName)}>
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
