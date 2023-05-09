export interface NumberOfStep {
  number: number;
}

export interface StepProps extends NumberOfStep {
  name: string;
  select?: boolean;
}

export interface StepNumberProps extends NumberOfStep {
  select?: boolean;
}
