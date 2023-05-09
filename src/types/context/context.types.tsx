// React
import { Dispatch, SetStateAction } from "react";

// Types
import { BillingMethod, PlanType } from "../components/molecules/plan.types";
import { Addons } from "../components/molecules/addon.types";

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
