import Text from "../text/text";

export default function AddonsInfo({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  return (
    <div className="flex justify-between w-full">
      <span className="text-cool-gray">{name}</span>
      <Text name={`+${price}/yr`} fontWeight="font-normal" />
    </div>
  );
}
