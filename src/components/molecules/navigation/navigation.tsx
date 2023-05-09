"use client";

// Components
import NextStep from "@/components/atoms/nextStep/nextStep";
import GoBack from "@/components/atoms/goBack/goBack";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

// Logic
import { Navigate } from "./navigationLogic";

export default function Navigation() {
  const {
    step: { number, setStep },
  } = useContext(GlobalContext);

  const CONFIRM_COMPONENT_NUMBER = 5;

  if (number === 4) {
    return (
      <div className="w-3/4 flex justify-between">
        <GoBack
          number={number}
          onClick={() => Navigate({ action: "back", setStep })}
        />
        <NextStep
          onClick={() => setStep(CONFIRM_COMPONENT_NUMBER)}
          name="Confirm"
          backgroundColor="bg-purplish-blue"
          hoverBackgroundColor="bg-blue-900"
        />
      </div>
    );
  }
  if (number === 5) return <></>;

  return (
    <div className="w-3/4 flex justify-between">
      <GoBack
        number={number}
        onClick={() => Navigate({ action: "back", setStep })}
      />
      <NextStep
        onClick={() => Navigate({ action: "next", setStep })}
        name="Next step"
        backgroundColor="bg-marine-blue"
        hoverBackgroundColor="bg-blue-900"
      />
    </div>
  );
}
