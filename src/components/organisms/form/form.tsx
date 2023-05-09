// Components
import Input from "@/components/molecules/input/input";

// Hook
import UseVerifyEmail from "@/hooks/useVerifyEmail";

// Context
import { GlobalContext } from "@/context/global";

// React
import { useContext } from "react";

export default function Form() {
  const { user } = useContext(GlobalContext);

  return (
    <form className="w-3/4 max-sm:w-full flex flex-col gap-6">
      <Input
        name="Name"
        onChange={({ target }) => target.value && user.setName(target.value)}
        placeholder="Vanessa Mint"
        type="text"
      />

      <Input
        name="Email Address"
        placeholder="vanessamint@"
        required
        type="email"
        onChange={({ target }) =>
          user.setEmail(UseVerifyEmail({ email: target.value }))
        }
      />

      <Input
        name="Phone Number"
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
