// Types
import { GlobalErrors } from "@/types/erros.types";

export default function GlobalError(messageError: GlobalErrors) {
  return new Error(messageError.messageError);
}
