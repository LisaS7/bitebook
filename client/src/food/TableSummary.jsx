import { SummarySection } from "./style";
import { GroupPie, ColourPie } from "./charts";

export default function Summary() {
  return (
    <SummarySection>
      <GroupPie />
      <ColourPie />
    </SummarySection>
  );
}
