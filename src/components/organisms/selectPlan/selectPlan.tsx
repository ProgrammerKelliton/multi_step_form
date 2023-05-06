// Components
import BillingMethod from "@/components/molecules/billingMethod/billingMethod";
import Plan from "@/components/molecules/plan/plan";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext, useState } from "react";

export default function SelectPlan() {
  const {
    plan: {
      planSelected: { plan },
      setPlanSelected,
    },
  } = useContext(GlobalContext);

  const [showMonthPrice, setShowMonthPrice] = useState(true);

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
          showMonthPrice={showMonthPrice}
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
          showMonthPrice={showMonthPrice}
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
          showMonthPrice={showMonthPrice}
        />
      </div>

      <BillingMethod onClick={() => setShowMonthPrice((prev) => !prev)} />
    </div>
  );
}
