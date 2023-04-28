import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterFoods, resetFilters } from "../../../state/slice";

export function Controls({ options }) {
  const dispatch = useDispatch();

  const colourOptions = options.colour.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  const flavourOptions = options.flavour.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  const textureOptions = options.texture.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  function handleChange(event) {
    const category = event.target.id;
    const selected = [...event.target.selectedOptions].map(
      (item) => item.value
    );
    dispatch(filterFoods({ category, selected }));
  }

  return (
    <>
      <button onClick={() => dispatch(resetFilters())}>Reset</button>
      <div>
        <Form.Label>Colour</Form.Label>
        <Form.Select
          id="colour"
          multiple
          onChange={(event) => {
            handleChange(event);
          }}
        >
          {colourOptions}
        </Form.Select>
      </div>
      <div>
        <Form.Label>Flavour</Form.Label>
        <Form.Select
          id="flavour"
          multiple
          onChange={(event) => {
            handleChange(event);
          }}
        >
          {flavourOptions}
        </Form.Select>
      </div>
      <div>
        <Form.Label>Texture</Form.Label>
        <Form.Select
          id="texture"
          multiple
          onChange={(event) => {
            handleChange(event);
          }}
        >
          {textureOptions}
        </Form.Select>
      </div>
    </>
  );
}
