// React
import { Dispatch, SetStateAction } from "react";

export enum actionsNavigate {
  "back",
  "next",
}

type actionNavigate = keyof typeof actionsNavigate;

export interface NavigateProps {
  action: actionNavigate;
  setStep: Dispatch<SetStateAction<number>>;
}
