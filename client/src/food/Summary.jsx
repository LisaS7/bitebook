import { Card } from "../components/Layout/global-style";

export default function Summary({ foods }) {
  return <Card>{foods.length} foods</Card>;
}
