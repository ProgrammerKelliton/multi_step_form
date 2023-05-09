// Components
import BillingMethod from "@/components/molecules/billingMethod/billingMethod";
import Plan from "@/components/molecules/plan/plan";

// Context
import { GlobalContext } from "@/context/global";

// Utils
import getPricesPlans from "@/utils/getPricesPlans";

// React
import { useContext, useEffect, useState } from "react";

// Logic
import { handlerOnClick, handlerOnClickBillingMethod } from "./selectPlanLogic";

export default function SelectPlan() {
  const {
    plan: {
      planSelected: { plan },
      setPlanSelected,
      billingMethod,
      setBillingMethod,
    },
    addons: { addonsSelected, setAddonsSelected },
  } = useContext(GlobalContext);

  const [billingMethodIsMonthy, setBillingMethodIsMonthy] = useState(
    billingMethod.method === "monthy"
  );

  useEffect(
    () => setBillingMethodIsMonthy(billingMethod.method === "monthy"),
    [billingMethod]
  );

  return (
    <div className="w-3/4 flex flex-col gap-8">
      <div className="flex justify-between w-full gap-4 max-lg:flex-col max-lg:overflow-y-scroll max-lg:h-1/2">
        <Plan
          icon="/icons/arcade.svg"
          alt="icon arcade"
          name="Arcade"
          monthsFree={2}
          priceMonth={getPricesPlans({ plan: "Arcade" })?.monthly || 0}
          priceYear={getPricesPlans({ plan: "Arcade" })?.yearly || 0}
          selected={plan === "Arcade"}
          onClick={() =>
            handlerOnClick({
              plan: { plan: "Arcade" },
              billingMethodIsMonthy,
              setPlanSelected,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />

        <Plan
          icon="/icons/advanced.svg"
          alt="icon advanced"
          name="Advanced"
          monthsFree={2}
          priceMonth={getPricesPlans({ plan: "Advanced" })?.monthly || 0}
          priceYear={getPricesPlans({ plan: "Advanced" })?.yearly || 0}
          selected={plan === "Advanced"}
          onClick={() =>
            handlerOnClick({
              plan: { plan: "Advanced" },
              billingMethodIsMonthy,
              setPlanSelected,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />

        <Plan
          icon="/icons/pro.svg"
          alt="icon pro"
          name="Pro"
          monthsFree={2}
          priceMonth={getPricesPlans({ plan: "Pro" })?.monthly || 0}
          priceYear={getPricesPlans({ plan: "Pro" })?.yearly || 0}
          selected={plan === "Pro"}
          onClick={() =>
            handlerOnClick({
              plan: { plan: "Pro" },
              billingMethodIsMonthy,
              setPlanSelected,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />
      </div>

      <BillingMethod
        onClick={() => {
          handlerOnClickBillingMethod({
            addonsSelected,
            billingMethod,
            plan: { plan: plan },
            setAddonsSelected,
            setBillingMethod,
            setPlanSelected,
          });
        }}
        monthlyIsSelected={billingMethodIsMonthy}
      />
    </div>
  );
}
