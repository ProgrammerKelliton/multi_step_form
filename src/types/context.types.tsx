import { Dispatch, SetStateAction } from "react";
import { PlanType } from "./plan.types";

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
  };
}
