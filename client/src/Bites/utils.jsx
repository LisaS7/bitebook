export function DisplayRating(rating) {
  return "🟢".repeat(rating) + "⚪".repeat(5 - rating);
}
