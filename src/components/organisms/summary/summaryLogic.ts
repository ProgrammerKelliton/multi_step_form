// Types
import { SumTotalValueProps } from "@/types/components/organisms/summary.types";

function SumTotalValue({ addonsSelected, planSelected }: SumTotalValueProps) {
  let total = 0;

  addonsSelected.forEach((addon) => {
    total += addon.price || 0;
  });

  total += planSelected.price || 0;

  return total;
}

export { SumTotalValue };
