import SummaryAddons from "@/components/molecules/summaryAddons";
import SummaryPlan from "@/components/molecules/summaryPlan/summaryPlan";

export default function Summary() {
  return (
    <section className="w-3/4 flex flex-col gap-8">
      <div className="bg-slate-50 p-8 rounded-xl flex gap-8 flex-col">
        <SummaryPlan />
        <hr />
        <SummaryAddons />
      </div>

      <div className="flex justify-between px-8">
        <span className="text-cool-gray">Total (per year)</span>
        <span className="text-purplish-blue font-bold text-xl">$120/yr</span>
      </div>
    </section>
  );
}
