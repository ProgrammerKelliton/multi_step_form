export enum LayoutSteps {
  "your info",
  "select plan",
  "add-ons",
  "summary",
}

type step = keyof typeof LayoutSteps;

export interface LayoutManagerProps {
  layoutStep: step;
}
