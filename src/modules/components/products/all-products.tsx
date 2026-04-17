"use client";

import { TProductData } from "@/config/types";
import ProductList from "../products/product-list";

const AllProducts = ({ products }: { products: TProductData[] }) => {
  return <ProductList products={products} title="Browse Our Catalog" />;
};

export default AllProducts;
