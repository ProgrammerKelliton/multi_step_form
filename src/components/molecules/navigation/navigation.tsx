"use client";

// Components
import NextStep from "@/components/atoms/nextStep/nextStep";
import GoBack from "@/components/atoms/goBack/goBack";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

export default function Navigation() {
  const {
    step: { number, setStep },
  } = useContext(GlobalContext);

  // todo: add reducer
  function handlerGoBackOnClick() {
    setStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }

  function handlerNextStepOnClick() {
    setStep((prev) => {
      if (prev !== 4) {
        return prev + 1;
      }
      return prev;
    });
  }

  return (
    <div className="w-2/3 flex justify-between">
      <GoBack number={number} onClick={() => handlerGoBackOnClick()} />
      <NextStep onClick={() => handlerNextStepOnClick()} />
    </div>
  );
}