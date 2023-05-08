// Components
import { useContext } from "react";
import AddonsInfo from "../../atoms/addonsInfo/addonsInfo";
import { GlobalContext } from "@/context/global";

export default function SummaryAddons() {
  const {
    addons: { addonsSelected },
  } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="flex justify-between flex-col gap-4">
        {addonsSelected.map(({ price, type }, index) => (
          <AddonsInfo key={index} name={type || ""} price={price || 0} />
        ))}
      </div>
    </div>
  );
}
