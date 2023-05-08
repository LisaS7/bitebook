import { SummarySection } from "./style";
import { PropertyPie } from "./charts";
import { TapeTopLeft, TapeTopRight } from "../components/Layout/Tape";

export default function Summary() {
  return (
    <SummarySection>
      <TapeTopLeft />
      <TapeTopRight />
      <PropertyPie property="grouping" title="Group" />
      <PropertyPie property="colour" title="Colour" />
      <PropertyPie property="flavour" title="Flavour" />
      <PropertyPie property="texture" title="Texture" />
    </SummarySection>
  );
}
