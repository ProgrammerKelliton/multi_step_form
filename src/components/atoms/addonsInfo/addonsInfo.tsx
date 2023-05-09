// Components
import Text from "../text/text";

export default function AddonsInfo({
  name,
  price,
  prefix,
}: {
  name: string;
  price: number;
  prefix: string;
}) {
  return (
    <div className="flex justify-between w-full">
      <span className="text-cool-gray">{name}</span>
      <Text name={`+${price}/${prefix}`} fontWeight="font-normal" />
    </div>
  );
}
