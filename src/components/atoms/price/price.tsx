// Types
import { PriceProps } from "@/types/components/atoms/price.types";

export default function Price({
  priceMonth,
  priceYear,
  showMonthPrice,
}: PriceProps) {
  let price = showMonthPrice ? priceMonth : priceYear;
  let sufixTime = showMonthPrice ? "/mo" : "/yr";

  return (
    <span className="text-cool-gray">
      ${price}
      {sufixTime}
    </span>
  );
}
