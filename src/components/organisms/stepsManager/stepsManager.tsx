import Step from "@/components/molecules/step/step";

export default function StepsManager() {
  return (
    <aside className="p-8 bg-side-bar-desktop h-full bg-no-repeat bg-cover w-1/4 rounded-xl flex flex-col gap-8">
      <Step name="your info" number={1} select />
      <Step name="select plan" number={2} />
      <Step name="addo-ons" number={3} />
      <Step name="summary" number={4} />
    </aside>
  );
}
