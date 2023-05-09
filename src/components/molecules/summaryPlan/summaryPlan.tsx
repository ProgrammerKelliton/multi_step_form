// Components
import Text from "@/components/atoms/text/text";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

export default function SummaryPlan() {
  const {
    step: { setStep },
    plan: {
      planSelected: { plan, price },
      billingMethod,
    },
  } = useContext(GlobalContext);

  const changeToStep = 2;
  const prefix = billingMethod.method === "monthy" ? "mo" : "yr";

  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col">
        <Text name={`${plan} (${billingMethod.method})`} className="text-lg" />
        <span
          className="text-cool-gray underline hover:text-purplish-blue font-medium hover:cursor-pointer"
          onClick={() => setStep(changeToStep)}
        >
          Change
        </span>
      </div>
      <Text
        name={`$${price}/${prefix}`}
        className="text-lg"
        fontWeight="font-bold"
      />
    </div>
  );
}
