"use client";

import { IProductsData } from "@/config/types";
import ProductList from "../products/product-list";

const AllProducts = ({ products }: { products: IProductsData[] }) => {
  return <ProductList products={products} title="Browse Our Catalog" />;
};

export default AllProducts;
