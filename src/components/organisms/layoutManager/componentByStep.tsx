// Types
import { NumberOfStep } from "@/types/step.types";

// Components
import PickAddons from "../pickAddons/pickAddons";
import SelectPlan from "../selectPlan/selectPlan";
import Form from "../form/form";

export default function ComponentByStep({ number }: NumberOfStep) {
  switch (number) {
    case 1:
      return <Form />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <PickAddons />;
    default:
      return <></>;
  }
}
