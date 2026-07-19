import { colors } from "./colors";

// utility functions
export function medalColor(i) {
  if (i === 0) return colors.gold;
  if (i === 1) return colors.silver;
  if (i === 2) return colors.bronze;
  return "transparent";
}