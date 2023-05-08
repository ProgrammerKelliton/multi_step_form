// Components
import TextWithHightLight from "@/components/atoms/textWithHightLight/textWithHightLight";
import Toggle from "@/components/atoms/toggle/toggle";

export default function BillingMethod({
  onClick,
  monthlyIsSelected,
}: {
  onClick: () => void;
  monthlyIsSelected: boolean;
}) {
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
          }}
          // ! if is checked then yearly method is selected
          isChecked={!monthlyIsSelected}
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
