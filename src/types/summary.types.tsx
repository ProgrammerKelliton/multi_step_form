import { Addons } from "./addon.types";
import { PlanType } from "./plan.types";

export interface SumTotalValueProps {
  addonsSelected: Addons[] | [];
  planSelected: PlanType;
}
