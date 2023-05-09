// React
import { useContext } from "react";

// Components
import AddonsInfo from "../../atoms/addonsInfo/addonsInfo";

// Context
import { GlobalContext } from "@/context/global";

export default function SummaryAddons() {
  const {
    addons: { addonsSelected },
    plan: {
      billingMethod: { method },
    },
  } = useContext(GlobalContext);

  const prefix = method === "monthy" ? "mo" : "yr";

  return (
    <div className="w-full">
      <div className="flex justify-between flex-col gap-4">
        {addonsSelected.map(({ price, type }, index) => (
          <AddonsInfo
            prefix={prefix}
            key={index}
            name={type || ""}
            price={price || 0}
          />
        ))}
      </div>
    </div>
  );
}
