// Components
import Addon from "@/components/molecules/addon/addon";

export default function PickAddons() {
  return (
    <div className="w-3/4 flex flex-col gap-6">
      <Addon
        name="Online service"
        descrition="Access to multiplayer games"
        priceMonths={1}
        priceYear={10}
      />

      <Addon
        name="Larger storage"
        descrition="Extra 1TB of cloud save"
        priceMonths={2}
        priceYear={20}
      />

      <Addon
        name="Customizable Profile"
        descrition="Custom theme on your profile"
        priceMonths={2}
        priceYear={20}
      />
    </div>
  );
}
