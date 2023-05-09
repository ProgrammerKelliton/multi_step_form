// Types
import {
  changeAddonsSelectedProps,
  changePriceAddonsProps,
  changePricePlanProps,
  handlerOnClickBillingMethodProps,
  handlerOnClickProps,
} from "@/types/components/organisms/selectPlanLogic.types";
import { Addons } from "@/types/addon.types";

// Utils
import handlerBillingMethod from "@/utils/handlerBillingMethod";
import getPricesAddons from "@/utils/getPricesAddons";
import getPricesPlans from "@/utils/getPricesPlans";

function changePricePlan({ method, plan: { plan } }: changePricePlanProps) {
  if (method === "monthy") return getPricesPlans({ plan })?.monthly;

  return getPricesPlans({ plan })?.yearly;
}

function changePriceAddons({ method, addon }: changePriceAddonsProps) {
  if (method === "monthy")
    return getPricesAddons({ type: addon.type })?.monthly;

  return getPricesAddons({ type: addon.type })?.yearly;
}

function changeAddonsSelected({
  addonsSelected,
  method,
}: changeAddonsSelectedProps) {
  let newAddonsValues: Addons[] = addonsSelected.map((addon) => {
    return {
      price: changePriceAddons({ addon, method }),
      type: addon.type,
    } as Addons;
  });

  return newAddonsValues;
}

function handlerOnClickBillingMethod({
  billingMethod,
  setBillingMethod,
  setPlanSelected,
  plan: { plan },
  addonsSelected,
  setAddonsSelected,
}: handlerOnClickBillingMethodProps) {
  const method = handlerBillingMethod(billingMethod).method;

  // Mudando plano selecionado
  setPlanSelected({
    plan: plan,
    price: changePricePlan({ plan: { plan: plan }, method }),
  });

  // Mudando forma de cobrança
  setBillingMethod({
    method: method,
  });

  // Mudando addons selecionados
  setAddonsSelected(changeAddonsSelected({ addonsSelected, method }));
}

function handlerOnClick({
  plan: { plan },
  setPlanSelected,
  billingMethodIsMonthy,
}: handlerOnClickProps) {
  setPlanSelected({
    plan,
    price: billingMethodIsMonthy
      ? getPricesPlans({ plan })?.monthly || 0
      : getPricesPlans({ plan })?.yearly || 0,
  });
}

export {
  handlerOnClickBillingMethod,
  changePricePlan,
  changePriceAddons,
  handlerOnClick,
};
