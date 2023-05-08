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
    plan: {
      planSelected: { price },
    },
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

  function handlerConfirm() {
    console.log("Confirmado");
  }

  if (number === 4) {
    return (
      <div className="w-3/4 flex justify-between">
        <GoBack number={number} onClick={() => handlerGoBackOnClick()} />
        <NextStep
          onClick={() => handlerConfirm()}
          name="Confirm"
          backgroundColor="bg-purplish-blue"
          hoverBackgroundColor="bg-blue-900"
        />
      </div>
    );
  }

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
