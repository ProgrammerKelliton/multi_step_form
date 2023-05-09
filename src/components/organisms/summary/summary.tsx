// Components
import SummaryAddons from "@/components/molecules/summaryAddons/summaryAddons";
import SummaryPlan from "@/components/molecules/summaryPlan/summaryPlan";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

// Logic
import { SumTotalValue } from "./summaryLogic";

export default function Summary() {
  const {
    addons: { addonsSelected },
    plan: { planSelected },
  } = useContext(GlobalContext);

  return (
    <section className="w-3/4 flex flex-col gap-8">
      <div className="bg-slate-50 p-8 rounded-xl flex gap-8 flex-col">
        <SummaryPlan />
        {addonsSelected.length > 0 && (
          <>
            <hr />
            <SummaryAddons />
          </>
        )}
      </div>

      <div className="flex justify-between px-8">
        <span className="text-cool-gray">Total (per year)</span>
        <span className="text-purplish-blue font-bold text-xl">
          ${SumTotalValue({ addonsSelected, planSelected })}/yr
        </span>
      </div>
    </section>
  );
}
