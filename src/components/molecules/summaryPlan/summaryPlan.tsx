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

  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col">
        <Text name={`${plan} (${billingMethod.method})`} className="text-lg" />
        <span
          className="text-cool-gray hover:underline font-medium hover:cursor-pointer"
          onClick={() => setStep(changeToStep)}
        >
          Change
        </span>
      </div>
      <Text name={`$${price}/mo`} className="text-lg" fontWeight="font-bold" />
    </div>
  );
}
