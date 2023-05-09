// Types
import { Addons } from "../molecules/addon.types";
import { PlanType } from "../molecules/plan.types";

export interface SumTotalValueProps {
  addonsSelected: Addons[] | [];
  planSelected: PlanType;
}
