// Types
import { GlobalErrors } from "@/types/erros.types";

export default function GlobalErros(messageError: GlobalErrors) {
  return new Error(messageError.messageError);
}
