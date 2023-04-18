import { SortAscending, SortDescending } from "./Buttons";
import { StyledHead, HeadingContent } from "./style";

export default function TableHead({ template }) {
  const headingElements = Object.values(template).map((obj, index) => (
    <th key={index}>
      <HeadingContent>
        {obj.heading}
        {obj.sortable && (
          <div>
            <SortAscending />
            <SortDescending />
          </div>
        )}
      </HeadingContent>
    </th>
  ));

  return (
    <StyledHead>
      <tr>
        {headingElements}
        <th></th>
        <th></th>
      </tr>
    </StyledHead>
  );
}
