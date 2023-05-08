// Components
import BillingMethod from "@/components/molecules/billingMethod/billingMethod";
import Plan from "@/components/molecules/plan/plan";

// Context
import { GlobalContext } from "@/context/global";
import getPricesPlans from "@/utils/getPricesPlans";


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
          priceMonth={getPricesPlans({ plan: "Arcade" }).monthly}
          priceYear={getPricesPlans({ plan: "Arcade" }).yearly}
          selected={plan === "Arcade"}
          onClick={() =>
            setPlanSelected({
              plan: "Arcade",
              price: billingMethodIsMonthy ? 9 : 90,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />

        <Plan
          icon="/icons/advanced.svg"
          alt="icon advanced"
          name="Advanced"
          monthsFree={2}
          priceMonth={getPricesPlans({ plan: "Advanced" }).monthly}
          priceYear={getPricesPlans({ plan: "Advanced" }).yearly}
          selected={plan === "Advanced"}
          onClick={() =>
            setPlanSelected({
              plan: "Advanced",
              price: billingMethodIsMonthy
                ? getPricesPlans({ plan: "Advanced" }).monthly
                : getPricesPlans({ plan: "Advanced" }).yearly,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />

        <Plan
          icon="/icons/pro.svg"
          alt="icon pro"
          name="Pro"
          monthsFree={2}
          priceMonth={getPricesPlans({ plan: "Pro" }).monthly}
          priceYear={getPricesPlans({ plan: "Pro" }).yearly}
          selected={plan === "Pro"}
          onClick={() =>
            setPlanSelected({
              plan: "Pro",
              price: billingMethodIsMonthy
                ? getPricesPlans({ plan: "Pro" }).monthly
                : getPricesPlans({ plan: "Pro" }).yearly,
            })
          }
          showMonthPrice={billingMethodIsMonthy}
        />
      </div>

      <BillingMethod
        onClick={() => {
          const method = handlerBillingMethod(billingMethod).method;

          setBillingMethod({
            method: method,
          });
          setPlanSelected({
            plan: plan,
            price:
              method === "monthy"
                ? getPricesPlans({ plan }).monthly
                : getPricesPlans({ plan }).yearly,
          });
        }}
        monthlyIsSelected={billingMethodIsMonthy}
      />
    </div>
  );
}
