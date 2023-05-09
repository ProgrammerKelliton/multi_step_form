export default function setSelectedStep(stepNumber: number) {
  return {
    step1Selected: stepNumber === 1,
    step2Selected: stepNumber === 2,
    step3Selected: stepNumber === 3,
    step4Selected: stepNumber === 4 || stepNumber === 5,
  };
}
