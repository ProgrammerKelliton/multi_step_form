// Types
import { PlanProps } from "@/types/components/molecules/plan.types";

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

  let borderColor = selected ? "border-purplish-blue" : "border-cool-gray";
  let backgroundColor = selected ? "bg-slate-100" : "bg-white";

  return (
    <div
      className={`${borderColor} ${backgroundColor} border-2 cursor-pointer rounded-xl border-solid p-4 w-44 max-xl:w-36 max-lg:flex-row max-lg:w-full hover:border-purplish-blue flex gap-16 flex-col`}
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
        {!showMonthPrice && (
          <span className="text-marine-blue">{monthsFree} months free</span>
        )}
      </div>
    </div>
  );
}
