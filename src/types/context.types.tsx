import { Dispatch, SetStateAction } from "react";
import { BillingMethod, PlanType } from "./plan.types";
import { Addons } from "./addon.types";

export interface GlobalContextState {
  step: {
    number: number;
    setStep: Dispatch<SetStateAction<number>>;
  };

  user: {
    name?: string;
    setName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
  };

  plan: {
    planSelected: PlanType;
    setPlanSelected: Dispatch<SetStateAction<PlanType>>;
    billingMethod: BillingMethod;
    setBillingMethod: Dispatch<SetStateAction<BillingMethod>>;
  };

  addons: {
    addonsSelected: Addons[] | [];
    setAddonsSelected: Dispatch<SetStateAction<Addons[] | []>>;
  };
}
