import AddonsInfo from "../atoms/addonsInfo/addonsInfo";

export default function SummaryAddons() {
  return (
    <div className="w-full">
      <div className="flex justify-between flex-col gap-4">
        <AddonsInfo name="Online service" price={7} />
        <AddonsInfo name="Online service" price={7} />
        <AddonsInfo name="Online service" price={7} />
      </div>
    </div>
  );
}
