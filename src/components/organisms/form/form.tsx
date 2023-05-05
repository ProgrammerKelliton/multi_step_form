// Components
import Input from "@/components/molecules/input/input";

// Hook
import UseVerifyEmail from "@/hooks/useVerifyEmail";

export default function Form() {
  return (
    <form className="w-2/3 flex flex-col gap-6">
      <Input name="Name" placeholder="Vanessa Mint" type="text" />
      <Input
        name="Email Address"
        messageError="This email already exists"
        placeholder="vanessamint@"
        required
        type="email"
        onChange={(event) => UseVerifyEmail({ email: event.target.value })}
      />
    </form>
  );
}
