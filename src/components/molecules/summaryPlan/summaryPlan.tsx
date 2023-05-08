// Components
import Text from "@/components/atoms/text/text";

export default function SummaryPlan() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col">
        <Text name={"Arcade (Monthy)"} className="text-lg" />
        <span className="text-cool-gray hover:underline font-medium hover:cursor-pointer">
          Change
        </span>
      </div>
      <Text name={"$9/mo"} className="text-lg" fontWeight="font-bold" />
    </div>
  );
}
