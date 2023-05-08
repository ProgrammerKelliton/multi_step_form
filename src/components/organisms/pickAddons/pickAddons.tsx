// Components
import Addon from "@/components/molecules/addon/addon";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

export default function PickAddons() {
  const {
    plan: {
      billingMethod: { method },
    },
  } = useContext(GlobalContext);

  return (
    <div className="w-3/4 flex flex-col gap-6">
      <Addon
        name="Online service"
        descrition="Access to multiplayer games"
        priceMonths={1}
        priceYear={10}
        billingMethodIsMonthy={method === "monthy"}
      />

      <Addon
        name="Larger storage"
        descrition="Extra 1TB of cloud save"
        priceMonths={2}
        priceYear={20}
        billingMethodIsMonthy={method === "monthy"}
      />

      <Addon
        name="Customizable Profile"
        descrition="Custom theme on your profile"
        priceMonths={2}
        priceYear={20}
        billingMethodIsMonthy={method === "monthy"}
      />
    </div>
  );
}
