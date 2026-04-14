import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { routes } from "@/config/routes";
import { IProductsData } from "@/config/types";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./price-tag";

const ProductCard = ({ product }: { product: IProductsData }) => {
  const { slug, name, images, brand, rating, price, stock } = product;

  return (
    <Card className="w-full max-w-sm gap-0 space-y-0 p-0">
      <CardHeader className="m-0 items-center p-0">
        <Link href={routes.singleProduct(slug)}>
          <Image
            src={images[0]}
            width={300}
            height={300}
            alt={name}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col justify-center gap-1 p-4">
        <div className="text-sm">{brand}</div>
        <Link href={routes.singleProduct(slug)}>
          <h2 className="text-sm font-medium">{name}</h2>
        </Link>
        <div className="mt-4 flex min-h-7.5 items-center justify-between gap-4">
          <p>{rating} Stars</p>
          {stock > 0 ? (
            <PriceTag price={price} />
          ) : (
            <p className="text-destructive">Out of stock!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
