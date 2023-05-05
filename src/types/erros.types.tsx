export enum InputErrorsMessage {
  "This email already exists",
  "This field is required",
  "This email isn't valid",
}

type InputError = keyof typeof InputErrorsMessage;

export interface InputErrors {
  messageError: InputError | string;
}

export interface GlobalErrors {
  messageError: InputError;
}
