// Components
import Text from "../text/text";

// Types
import { AddonsInfoProps } from "@/types/components/atoms/addonsInfo.types";

export default function AddonsInfo({ name, price, prefix }: AddonsInfoProps) {
  return (
    <div className="flex justify-between w-full">
      <span className="text-cool-gray">{name}</span>
      <Text name={`+${price}/${prefix}`} fontWeight="font-normal" />
    </div>
  );
}
