// Types
import { NumberOfStep } from "@/types/step.types";

// Components
import Form from "../form/form";
import SelectPlan from "../selectPlan/selectPlan";

export default function ComponentByStep({ number }: NumberOfStep) {
  switch (number) {
    case 1:
      return <Form />;
    case 2:
      return <SelectPlan />;

    default:
      return <></>;
  }
}
