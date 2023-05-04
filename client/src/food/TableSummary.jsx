import { SummarySection } from "./style";
import { PropertyPie } from "./charts";

export default function Summary() {
  return (
    <SummarySection>
      <PropertyPie property="grouping" title="Group" />
      <PropertyPie property="colour" title="Colour" />
      <PropertyPie property="flavour" title="Flavour" />
      <PropertyPie property="texture" title="Texture" />
    </SummarySection>
  );
}
