"use client";

// Types
import { BillingMethod, PlanType } from "@/types/plan.types";
import { ContainerProps } from "@/types/container.types";

// Global
import { GlobalContext } from "@/context/global";

// React
import { useState } from "react";

import { Addons } from "@/types/addon.types";
import getPricesPlans from "@/utils/getPricesPlans";

export default function Container({ children }: ContainerProps) {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [planSelected, setPlanSelected] = useState<PlanType>({
    plan: "Arcade",
    price: getPricesPlans({ plan: "Arcade" }).monthly,
  });
  const [addonsSelected, setAddonsSelected] = useState<Addons[] | []>([]);

  const [billingMethod, setBillingMethod] = useState<BillingMethod>({
    method: "monthy",
  });

  return (
    <GlobalContext.Provider
      value={{
        step: {
          number: step,
          setStep,
        },
        user: {
          name,
          setName,
          email,
          setEmail,
          phoneNumber,
          setPhoneNumber,
        },
        plan: {
          planSelected,
          setPlanSelected,
          billingMethod,
          setBillingMethod,
        },
        addons: {
          addonsSelected,
          setAddonsSelected,
        },
      }}
    >
      <div className="bg-white w-2/3 h-3/4 rounded-2xl shadow-slate-100 p-4 flex justify-between">
        {children}
      </div>
    </GlobalContext.Provider>
  );
}
