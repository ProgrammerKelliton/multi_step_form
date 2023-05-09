"use client";

// Components
import Step from "@/components/molecules/step/step";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext, useEffect, useState } from "react";

// Logic
import setSelectedStep from "./stepManagerLogic";

export default function StepsManager() {
  const {
    step: { number },
  } = useContext(GlobalContext);

  const [stepsState, setStepsState] = useState({
    step1Selected: true,
    step2Selected: false,
    step3Selected: false,
    step4Selected: false,
  });

  useEffect(() => {
    setStepsState(setSelectedStep(number));
  }, [number]);

  return (
    <aside className="p-8 bg-side-bar-desktop h-full bg-no-repeat bg-cover max-lg:w-1/3 w-1/4 rounded-xl flex flex-col gap-8 max-md:flex-row max-md:w-full max-md:h-1/6">
      <Step name="your info" number={1} select={stepsState.step1Selected} />
      <Step name="select plan" number={2} select={stepsState.step2Selected} />
      <Step name="addo-ons" number={3} select={stepsState.step3Selected} />
      <Step name="summary" number={4} select={stepsState.step4Selected} />
    </aside>
  );
}
