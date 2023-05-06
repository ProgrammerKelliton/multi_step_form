// Component
import GlobalError from "@/erros/globalErros";

// Types
import { UseVerifyEmailProps } from "@/types/useVerifyEmail.types";

export default function UseVerifyEmail({ email }: UseVerifyEmailProps) {
  // todo: Find the user with this email
  if (email.trim() !== "") {
    if (email === "example@gmail.com") return email;

    if (!email.includes("@")) {
      throw GlobalError({ messageError: "This email isn't valid" });
    } else {
      throw GlobalError({ messageError: "This email already exists" });
    }
  } else {
    return email;
  }
}
