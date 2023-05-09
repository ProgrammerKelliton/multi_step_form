"use client";

// Components
import NextStep from "@/components/atoms/nextStep/nextStep";
import GoBack from "@/components/atoms/goBack/goBack";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext, useState } from "react";

export default function Navigation() {
  const {
    step: { number, setStep },
  } = useContext(GlobalContext);

  const CONFIRM_COMPONENT_NUMBER = 5;

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

  if (number === 4) {
    return (
      <div className="w-3/4 flex justify-between">
        <GoBack number={number} onClick={() => handlerGoBackOnClick()} />
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
      <GoBack number={number} onClick={() => handlerGoBackOnClick()} />
      <NextStep
        onClick={() => handlerNextStepOnClick()}
        name="Next step"
        backgroundColor="bg-marine-blue"
        hoverBackgroundColor="bg-blue-900"
      />
    </div>
  );
}
