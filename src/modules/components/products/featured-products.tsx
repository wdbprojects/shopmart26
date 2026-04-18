"use client";

import { TProductData } from "@/config/types";
import ProductList from "../products/product-list";

const FeaturedProducts = ({
  data,
}: {
  success: boolean | undefined;
  message: string | undefined;
  data: TProductData[];
}) => {
  return <ProductList products={data || []} title="Featured Products" />;
};

export default FeaturedProducts;
