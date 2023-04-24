import { useDispatch } from "react-redux";
import { sortFoods } from "../../../state/slice";
import { SortAscending, SortDescending } from "./Buttons";
import { StyledHead, HeadingContent } from "./style";

export default function TableHead({ template }) {
  const dispatch = useDispatch();
  function handleSort(event, heading) {
    dispatch(sortFoods({ key: heading, direction: event.target.id }));
  }

  const headingElements = Object.values(template).map((obj, index) => (
    <th key={index}>
      <HeadingContent>
        {obj.heading}
        {obj.sortable && (
          <div>
            <SortAscending heading={obj.heading} handleSort={handleSort} />
            <SortDescending heading={obj.heading} handleSort={handleSort} />
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
        <th key="button2"></th>
      </tr>
    </StyledHead>
  );
}
