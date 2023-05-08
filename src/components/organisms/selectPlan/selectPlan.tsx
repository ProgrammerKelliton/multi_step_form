// Components
import BillingMethod from "@/components/molecules/billingMethod/billingMethod";
import Plan from "@/components/molecules/plan/plan";

// Context
import { GlobalContext } from "@/context/global";

// Utils
import handlerBillingMethod from "@/utils/handlerBillingMethod";

// React
import { useContext, useEffect, useState } from "react";

export default function SelectPlan() {
  const {
    plan: {
      planSelected: { plan },
      setPlanSelected,
      billingMethod,
      setBillingMethod,
    },
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
          showMonthPrice={billingMethodIsMonthy}
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
          showMonthPrice={billingMethodIsMonthy}
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
          showMonthPrice={billingMethodIsMonthy}
        />
      </div>

      <BillingMethod
        onClick={() => {
          setBillingMethod({
            method: handlerBillingMethod(billingMethod).method,
          });
        }}
        monthlyIsSelected={billingMethodIsMonthy}
      />
    </div>
  );
}
