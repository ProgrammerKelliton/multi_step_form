// Component
import GlobalErros from "@/erros/globalErros";

// Types
import { UseVerifyEmailProps } from "@/types/useVerifyEmail.types";

export default function UseVerifyEmail({ email }: UseVerifyEmailProps) {
  // todo: Find the user with this email
  if (email.trim() !== "" && email === "kelliton@gmail.com") {
    return email;
  }
  if (email.trim() === "") {
    return email;
  } else {
    throw GlobalErros({ messageError: "This email already exists" });
  }
}
