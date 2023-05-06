import Addon from "@/components/molecules/addon/addon";

export default function PickAddons() {
  return (
    <div className="w-3/4">
      <Addon
        name="Online service"
        descrition="Access to multiplayer games"
        priceMonths={1}
        priceYear={10}
      />
    </div>
  );
}
