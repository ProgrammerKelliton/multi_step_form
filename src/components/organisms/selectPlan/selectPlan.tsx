// Components
import BillingMethod from "@/components/molecules/billingMethod/billingMethod";
import Plan from "@/components/molecules/plan/plan";

// Context
import { GlobalContext } from "@/context/global";

import handlerBillingMethod from "@/utils/handlerBillingMethod";

// React
import { useContext } from "react";

export default function SelectPlan() {
  const {
    plan: {
      planSelected: { plan },
      setPlanSelected,
      billingMethod,
      setBillingMethod,
    },
  } = useContext(GlobalContext);

  return (
    <div className="w-3/4 flex flex-col gap-8">
      <div className="flex justify-between w-full">
        <Plan
          icon="/icons/arcade.svg"
          alt="icon arcade"
          name="Arcade"
          monthsFree={2}
          priceMonth={9}
          priceYear={90}
          selected={plan === "Arcade"}
          onClick={() => setPlanSelected({ plan: "Arcade" })}
          showMonthPrice={billingMethod.method === "monthy"}
        />

        <Plan
          icon="/icons/advanced.svg"
          alt="icon advanced"
          name="Advanced"
          monthsFree={2}
          priceMonth={12}
          priceYear={150}
          selected={plan === "Advanced"}
          onClick={() => setPlanSelected({ plan: "Advanced" })}
          showMonthPrice={billingMethod.method === "monthy"}
        />

        <Plan
          icon="/icons/pro.svg"
          alt="icon pro"
          name="Pro"
          monthsFree={2}
          priceMonth={15}
          priceYear={150}
          selected={plan === "Pro"}
          onClick={() => setPlanSelected({ plan: "Pro" })}
          showMonthPrice={billingMethod.method === "monthy"}
        />
      </div>

      <BillingMethod
        onClick={() => {
          setBillingMethod({
            method: handlerBillingMethod(billingMethod).method,
          });
        }}
        monthlyIsSelected={billingMethod.method === "yearly"}
      />
    </div>
  );
}
