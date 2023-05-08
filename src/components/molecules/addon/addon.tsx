"use client";

// Components
import CheckMark from "@/components/atoms/checkmark/checkmark";

// Types
import { AddonProps } from "@/types/addon.types";

// React
import { useState } from "react";

export default function Addon({
  descrition,
  name,
  priceMonths,
  priceYear,
}: AddonProps) {
  const [isSelect, setIsSelect] = useState(false);

  let price = true ? priceMonths : priceYear;
  let borderColor = isSelect ? "border-purplish-blue" : "border-cool-gray";
  let formatPrice = true ? `+$${price}/mo` : `+$${price}/yr`;
  let backgroundColor = isSelect ? "bg-slate-50" : "bg-transparent";

  return (
    <div
      className={`py-4 px-8 border rounded-xl ${borderColor} ${backgroundColor} w-full flex justify-between items-center`}
    >
      <div className="flex gap-4 items-center">
        <CheckMark onClick={() => setIsSelect((prev) => !prev)} />

        <div className="flex flex-col">
          <span className="font-medium text-marine-blue">{name}</span>
          <span className="text-cool-gray">{descrition}</span>
        </div>
      </div>

      <span className="text-purplish-blue">{formatPrice}</span>
    </div>
  );
}
