"use client";

import { TProductData } from "@/config/types";
import PriceTag from "./price-tag";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductImages from "@/modules/components/products/product-images";

const SingleProductDetails = ({ product }: { product?: TProductData }) => {
  return (
    <section className="p-4">
      <div className="bg-background/90 dark:bg-background/50 grid grid-cols-1 rounded-sm p-4 md:grid-cols-5">
        {/* IMAGES COLUMN */}
        <div className="col-span-2">
          <ProductImages images={product?.images ?? []} />
        </div>
        {/* DETAILS COLUMN */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-4">
            <p>
              {product?.brand} {product?.category}
            </p>
            <h2 className="text-2xl font-semibold">{product?.name}</h2>
            <p>
              {product?.rating} of {product?.numReviews} Reviews
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PriceTag
                price={Number(product?.price)}
                className="bg-accent w-24 rounded-xl px-4 py-1.5"
              />
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
        {/* ACTION COLUMN */}
        <div className="col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p>Price</p>
                <PriceTag price={Number(product?.price)} />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <p>Status</p>
                <Badge
                  variant={
                    product?.stock && product?.stock > 0
                      ? "success"
                      : "destructive"
                  }
                >
                  {product?.stock && product?.stock > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </Badge>
              </div>
              <div className="block w-full">
                <Button
                  variant="default"
                  disabled={product?.stock && product?.stock > 0 ? false : true}
                  className="mt-4 w-full"
                >
                  Add to Card
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetails;
