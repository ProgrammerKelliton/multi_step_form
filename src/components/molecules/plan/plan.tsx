// Types
import { PlanProps } from "@/types/plan.types";

// Components
import Price from "@/components/atoms/price/price";

// Next
import Image from "next/image";

export default function Plan({
  icon,
  alt,
  monthsFree,
  name,
  priceMonth,
  priceYear,
  showMonthPrice,
  selected,
  onClick,
}: PlanProps) {
  const ICON_SIZE = 48;
  let backgroundColor = selected ? "border-purplish-blue" : "border-cool-gray";

  return (
    <div
      className={`${backgroundColor} border-2 cursor-pointer rounded-xl border-solid p-4 w-44 flex gap-16 flex-col`}
      onClick={onClick}
    >
      <Image src={icon} width={ICON_SIZE} height={ICON_SIZE} alt={alt} />

      <div className="flex flex-col">
        <span className="text-marine-blue text-xl font-medium">{name}</span>

        <Price
          priceMonth={priceMonth}
          priceYear={priceYear}
          showMonthPrice={showMonthPrice}
        />
        {showMonthPrice && (
          <span className="text-marine-blue">{monthsFree} months free</span>
        )}
      </div>
    </div>
  );
}
