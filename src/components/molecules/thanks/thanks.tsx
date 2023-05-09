// Components
import Text from "@/components/atoms/text/text";

// Next
import Image from "next/image";

export default function Thanks() {
  return (
    <div className="w-3/4 h-full flex justify-center items-center flex-col gap-8">
      <Image
        src={"/icons/thanks.svg"}
        width={80}
        height={80}
        alt="icon thanks"
      />

      <div className="flex flex-col items-center gap-4">
        <Text name="Thank you!" fontWeight="font-bold" className="text-3xl" />
        <span className="text-center text-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </span>
      </div>
    </div>
  );
}
