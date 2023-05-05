export enum InputErrorsMessage {
  "This email already exists",
}

type InputError = keyof typeof InputErrorsMessage;

export interface InputErrors {
  messageError?: InputError;
}

export interface GlobalErrors {
  messageError: InputError;
}
