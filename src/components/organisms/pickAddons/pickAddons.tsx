// ! fix: Quando seleciona os addons e depois volta o muda para pagamento ao ano...
// ! os valores dos addons não muda
// todo: É preciso somar o valor total do valor a ser pago

// Components
import Addon from "@/components/molecules/addon/addon";

// Context
import { GlobalContext } from "@/context/global";
import { Addons } from "@/types/addon.types";
import getPricesAddons from "@/utils/getPricesAddons";

// React
import { useContext } from "react";

export default function PickAddons() {
  const {
    plan: {
      billingMethod: { method },
    },
    addons: { setAddonsSelected, addonsSelected },
  } = useContext(GlobalContext);

  function handlerAddAndRemoveAddons({ type, price }: Addons) {
    const alreadySelect = isSelected({ type });

    // if already selected remove it
    if (alreadySelect) {
      let updatedSeleted: Addons[] = addonsSelected.filter((addon) => {
        if (addon.type !== type) {
          return addon;
        }
      });

      setAddonsSelected(updatedSeleted);
    } else {
      setAddonsSelected((prev) => [...prev, { price, type }]);
    }
  }

  function getPrice({ type }: Addons) {
    if (method === "monthy") {
      return getPricesAddons({ type })?.monthly;
    }
    if (method === "yearly") {
      return getPricesAddons({ type })?.yearly;
    }
  }

  function isSelected({ type }: Addons) {
    return addonsSelected.some((addon) => addon.type === type);
  }

  return (
    <div className="w-3/4 flex flex-col gap-6">
      <Addon
        name="Online service"
        descrition="Access to multiplayer games"
        priceMonths={getPricesAddons({ type: "Online services" })?.monthly || 0}
        priceYear={getPricesAddons({ type: "Online services" })?.yearly || 0}
        billingMethodIsMonthy={method === "monthy"}
        onClick={() =>
          handlerAddAndRemoveAddons({
            type: "Online services",
            price: getPrice({ type: "Online services" }),
          })
        }
        select={isSelected({ type: "Online services" })}
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
            price: getPrice({ type: "larger storage" }),
          })
        }
        select={isSelected({ type: "larger storage" })}
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
            price: getPrice({ type: "Customizable profile" }),
          })
        }
        select={isSelected({ type: "Customizable profile" })}
      />
    </div>
  );
}
