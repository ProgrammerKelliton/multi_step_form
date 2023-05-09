// Types
import { NumberOfStep } from "@/types/components/atoms/step.types";

// Components
import Thanks from "@/components/molecules/thanks/thanks";
import PickAddons from "../pickAddons/pickAddons";
import SelectPlan from "../selectPlan/selectPlan";
import Summary from "../summary/summary";
import Form from "../form/form";

export default function ComponentByStep({ number }: NumberOfStep) {
  switch (number) {
    case 1:
      return <Form />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <PickAddons />;
    case 4:
      return <Summary />;
    case 5:
      return <Thanks />;
    default:
      return <></>;
  }
}
