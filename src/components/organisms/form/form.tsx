// Components
import Input from "@/components/molecules/input/input";
import { GlobalContext } from "@/context/global";

// Hook
import UseVerifyEmail from "@/hooks/useVerifyEmail";

// Context
import { useContext } from "react";

export default function Form() {
  const { user } = useContext(GlobalContext);

  return (
    <form className="w-2/3 flex flex-col gap-6">
      <Input
        name="Name"
        onChange={({ target }) => target.value && user.setName(target.value)}
        placeholder="Vanessa Mint"
        type="text"
      />

      <Input
        name="Email Address"
        messageError="This email already exists"
        placeholder="vanessamint@"
        required
        type="email"
        onChange={({ target }) =>
          user.setEmail(UseVerifyEmail({ email: target.value }))
        }
      />

      <Input
        name="Phone Number"
        messageError="This email already exists"
        placeholder="e.g. +1 234 567 890"
        required
        type="number"
        onChange={({ target }) =>
          target.value && user.setPhoneNumber(target.value)
        }
      />
    </form>
  );
}
