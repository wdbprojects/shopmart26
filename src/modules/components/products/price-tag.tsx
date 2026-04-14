import { cn } from "@/lib/utils";

const PriceTag = ({
  price,
  className,
}: {
  price: number;
  className?: string;
}) => {
  // ensure two decimal places
  const stringValue = price.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="align-super text-sm font-semibold">$</span>{" "}
      <span>{intValue}</span>.
      <span className="align-super text-sm">{floatValue}</span>
    </p>
  );
};

export default PriceTag;
