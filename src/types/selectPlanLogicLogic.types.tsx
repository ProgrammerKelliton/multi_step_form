import { Dispatch, SetStateAction } from "react";
import { BillingMethod, PlanType } from "@/types/plan.types";
import { Addons } from "./addon.types";

export interface handlerOnClickBillingMethodProps {
  billingMethod: BillingMethod;
  setBillingMethod: Dispatch<SetStateAction<BillingMethod>>;
  setPlanSelected: Dispatch<SetStateAction<PlanType>>;
  plan: PlanType;
  addonsSelected: Addons[] | [];
  setAddonsSelected: Dispatch<SetStateAction<Addons[] | []>>;
}

export interface changePricePlanProps extends BillingMethod {
  plan: PlanType;
}

export interface changeAddonsSelectedProps extends BillingMethod {
  addonsSelected: Addons[] | [];
}

export interface changePriceAddonsProps extends BillingMethod {
  addon: Addons;
}
