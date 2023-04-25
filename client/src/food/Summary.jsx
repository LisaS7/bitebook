import { PinkCard } from "../components/Layout/global.style";
import { SummarySection } from "./style";
import CategoryPie from "./charts";

export default function Summary({ foods }) {
  return (
    <SummarySection>
      <PinkCard>{foods.length} foods</PinkCard>
      <CategoryPie />
    </SummarySection>
  );
}
