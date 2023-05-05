import { useDispatch } from "react-redux";
import { sortFoods } from "../../../state/slice";
import { SortAscending, SortDescending } from "./Buttons";
import { StyledHead, HeadingContent } from "./style";
import { CreateButton } from "../Buttons";

export default function TableHead({ template, addRow }) {
  const dispatch = useDispatch();
  function handleSort(event, heading) {
    dispatch(sortFoods({ key: heading, direction: event.target.id }));
  }

  const headingElements = Object.keys(template).map((key, index) => (
    <th key={index}>
      <HeadingContent>
        {template[key].heading}
        {template[key].sortable && (
          <div>
            <SortAscending field={key} handleSort={handleSort} />
            <SortDescending field={key} handleSort={handleSort} />
          </div>
        )}
      </HeadingContent>
    </th>
  ));

  return (
    <StyledHead>
      <tr id="table-head-tr">
        {headingElements}
        <th key="button1"></th>
        <th key="button2">
          <CreateButton addRow={addRow} />
        </th>
      </tr>
    </StyledHead>
  );
}
