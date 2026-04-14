"use client";

import ProductList from "../products/product-list";
import { IProdutsData } from "@/config/types";

const AllProducts = ({ products }: { products: IProdutsData[] }) => {
  return <ProductList products={products} title="Featured Products" />;
};

export default AllProducts;
