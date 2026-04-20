import { cn, formatNumberWithDecimal } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return <div className={cn(className)}>${formatNumberWithDecimal(value)}</div>;
};

export default ProductPrice;
