// Component
import GlobalErros from "@/erros/globalErros";

// Types
import { UseVerifyEmailProps } from "@/types/useVerifyEmail.types";

export default function UseVerifyEmail({ email }: UseVerifyEmailProps) {
  // todo: Add verification email
  if (email.trim() !== "" && email === "kelliton@gmail.com") {
    return true;
  } else {
    throw GlobalErros({ messageError: "This email already exists" });
  }
}
