// Components
import TextWithHightLight from "@/components/atoms/textWithHightLight/textWithHightLight";
import Toggle from "@/components/atoms/toggle/toggle";

// React
import { useState } from "react";

export default function BillingMethod({ onClick }: { onClick: () => void }) {
  const [monthlyIsSelected, setMonthlyIsSelected] = useState(true);

  return (
    <div className="bg-slate-100 p-4 rounded-xl flex justify-center items-center">
      <div className="flex gap-4">
        <TextWithHightLight
          hightLightColor="text-marine-blue"
          name="Monthly"
          normalColor="text-cool-gray"
          enableHightLight={monthlyIsSelected}
        />

        <Toggle
          onClick={() => {
            onClick();
            setMonthlyIsSelected((prev) => !prev);
          }}
        />

        <TextWithHightLight
          hightLightColor="text-marine-blue"
          name="Yearly"
          normalColor="text-cool-gray"
          enableHightLight={!monthlyIsSelected}
        />
      </div>
    </div>
  );
}
