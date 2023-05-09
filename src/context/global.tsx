// Types
import { GlobalContextState } from "@/types/context/context.types";

// React
import { createContext } from "react";

export const GlobalContext = createContext<GlobalContextState>({
  step: {
    number: 1,
    setStep: () => {},
  },
  user: {
    email: "",
    setEmail: () => {},
    name: "",
    setName: () => {},
    phoneNumber: "",
    setPhoneNumber: () => {},
  },
  plan: {
    planSelected: { plan: "Arcade" },
    setPlanSelected: () => {},
    billingMethod: { method: "monthy" },
    setBillingMethod: () => {},
  },
  addons: {
    addonsSelected: [],
    setAddonsSelected: () => {},
  },
});
