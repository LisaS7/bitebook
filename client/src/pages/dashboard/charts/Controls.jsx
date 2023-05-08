import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { filterRecords, resetFilters } from "../../../state/slice";
import { ControlsContainer } from "../style";

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
    dispatch(filterRecords({ category, selected }));
  }

  function handleReset() {
    dispatch(resetFilters());
    document
      .querySelectorAll(".form-select")
      .forEach((item) => (item.value = null));
  }

  return (
    <ControlsContainer>
      <div>
        <Form.Label>
          <strong className="highlight-green">Colour</strong>
        </Form.Label>
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
        <Form.Label>
          <strong className="highlight-blue">Flavour</strong>
        </Form.Label>
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
        <Form.Label>
          {" "}
          <strong className="highlight-yellow">Texture</strong>
        </Form.Label>
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
      <button id="dark-button" onClick={() => handleReset()}>
        Reset
      </button>
    </ControlsContainer>
  );
}
