// Components
import CheckMark from "@/components/atoms/checkmark/checkmark";
import Text from "@/components/atoms/text/text";

// Types
import { AddonProps } from "@/types/components/molecules/addon.types";

// React
import { useEffect, useState } from "react";

export default function Addon({
  descrition,
  name,
  priceMonths,
  priceYear,
  billingMethodIsMonthy,
  onClick,
  select,
}: AddonProps) {
  const [isSelect, setIsSelect] = useState<boolean>(select || false);

  useEffect(() => {
    if (select) setIsSelect(select);
  }, [select]);

  let price = billingMethodIsMonthy ? priceMonths : priceYear;
  let borderColor = isSelect ? "border-purplish-blue" : "border-cool-gray";
  let formatPrice = billingMethodIsMonthy ? `+$${price}/mo` : `+$${price}/yr`;
  let backgroundColor = isSelect ? "bg-slate-50" : "bg-transparent";

  return (
    <div
      className={`py-4 px-8 border rounded-xl ${borderColor} ${backgroundColor} w-full flex justify-between items-center`}
    >
      <div className="flex gap-4 items-center">
        <CheckMark
          onClick={() => {
            setIsSelect((prev) => !prev);
            onClick();
          }}
          forceChecked={select}
        />

        <div className="flex flex-col">
          <Text name={name} />
          <span className="text-cool-gray">{descrition}</span>
        </div>
      </div>

      <span className="text-purplish-blue">{formatPrice}</span>
    </div>
  );
}
