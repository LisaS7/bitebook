import { PinkCard } from "../components/Layout/global-style";
import { SummarySection } from "./style";
import CategoryPie from "./Charts";

export default function Summary({ foods }) {
  return (
    <SummarySection>
      <PinkCard>{foods.length} foods</PinkCard>
      <CategoryPie />
    </SummarySection>
  );
}
