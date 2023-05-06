import { AddonProps } from "@/types/addon.types";

export default function Addon({
  descrition,
  name,
  priceMonths, //
  priceYear,
}: AddonProps) {
  let price = true ? priceMonths : priceYear;
  let formatPrice = true ? `+$${price}/mo` : `+$${price}/yr`;

  return (
    <div className="py-4 px-8 border-2 rounded-xl border-purplish-blue w-full flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="appearance-none border rounded-md border-cool-gray w-5 h-5 checked:bg-purplish-blue checked:border-purplish-blue"
        />

        <div className="flex flex-col">
          <span className="font-medium text-marine-blue">{name}</span>
          <span className="text-cool-gray">{descrition}</span>
        </div>
      </div>

      <span className="text-purplish-blue">{formatPrice}</span>
    </div>
  );
}
