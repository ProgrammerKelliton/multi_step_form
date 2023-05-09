// Components
import Addon from "@/components/molecules/addon/addon";

// Context
import { GlobalContext } from "@/context/global";

// Utils
import getPricesAddons from "@/utils/getPricesAddons";

// React
import { useContext } from "react";
import {
  getPrice,
  handlerAddAndRemoveAddons,
  isSelected,
} from "./pickAddonsLogic";

export default function PickAddons() {
  const {
    plan: {
      billingMethod: { method },
    },
    addons: { setAddonsSelected, addonsSelected },
  } = useContext(GlobalContext);

  return (
    <div className="w-3/4 flex max-sm:w-full flex-col gap-6 max-lg:overflow-x-scroll">
      <Addon
        name="Online service"
        descrition="Access to multiplayer games"
        priceMonths={getPricesAddons({ type: "Online services" })?.monthly || 0}
        priceYear={getPricesAddons({ type: "Online services" })?.yearly || 0}
        billingMethodIsMonthy={method === "monthy"}
        onClick={() =>
          handlerAddAndRemoveAddons({
            type: "Online services",
            price: getPrice({ type: "Online services", method }),
            addonsSelected,
            setAddonsSelected,
          })
        }
        select={isSelected({ type: "Online services", addonsSelected })}
      />

      <Addon
        name="Larger storage"
        descrition="Extra 1TB of cloud save"
        priceMonths={getPricesAddons({ type: "larger storage" })?.monthly || 0}
        priceYear={getPricesAddons({ type: "larger storage" })?.yearly || 0}
        billingMethodIsMonthy={method === "monthy"}
        onClick={() =>
          handlerAddAndRemoveAddons({
            type: "larger storage",
            price: getPrice({ type: "larger storage", method }),
            addonsSelected,
            setAddonsSelected,
          })
        }
        select={isSelected({ type: "larger storage", addonsSelected })}
      />

      <Addon
        name="Customizable Profile"
        descrition="Custom theme on your profile"
        priceMonths={
          getPricesAddons({ type: "Customizable profile" })?.monthly || 0
        }
        priceYear={
          getPricesAddons({ type: "Customizable profile" })?.yearly || 0
        }
        billingMethodIsMonthy={method === "monthy"}
        onClick={() =>
          handlerAddAndRemoveAddons({
            type: "Customizable profile",
            price: getPrice({ type: "Customizable profile", method }),
            addonsSelected,
            setAddonsSelected,
          })
        }
        select={isSelected({ type: "Customizable profile", addonsSelected })}
      />
    </div>
  );
}
