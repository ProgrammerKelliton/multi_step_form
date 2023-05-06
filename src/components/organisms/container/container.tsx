"use client";

// Types
import { ContainerProps } from "@/types/container.types";

// Global
import { GlobalContext } from "@/context/global";

// React
import { useState } from "react";

export default function Container({ children }: ContainerProps) {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

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
      }}
    >
      <div className="bg-white w-2/3 h-3/4 rounded-2xl shadow-slate-100 p-4 flex justify-between">
        {children}
      </div>
    </GlobalContext.Provider>
  );
}
