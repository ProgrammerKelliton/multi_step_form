// Components
import GlobalError from "@/erros/globalErros";

// Types
import { UseVerifyPhoneNumberProps } from "@/types/hook/useVerifyPhoneNumber.types";

export default function UseVerifyPhoneNumber({
  phoneNumber,
}: UseVerifyPhoneNumberProps) {
  // ? should to verify phone number
  if (phoneNumber) return phoneNumber;

  throw GlobalError({ messageError: "This field is required" });
}
