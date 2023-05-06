// Types
import { PriceProps } from "@/types/price.types";

export default function Price({
  priceMonth,
  priceYear,
  showMonthPrice,
}: PriceProps) {
  let price = showMonthPrice ? priceMonth : priceYear;
  let sufixTime = showMonthPrice ? "/yr" : "/mo";

  return (
    <span className="text-cool-gray">
      ${price}
      {sufixTime}
    </span>
  );
}
