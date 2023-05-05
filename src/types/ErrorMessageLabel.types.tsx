import { InputErrors } from "./erros.types";

// ! InputErrors extends property messageError
export interface ErrorMessageLabelProps extends InputErrors {
  foundMessageError: boolean;
}
