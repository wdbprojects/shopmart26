"use client";

import { useEffect } from "react";
import AllProducts from "@/modules/components/products/all-products";
import { productsData } from "@/lib/data";
import { findAllProductsAction } from "@/_actions/product-actions";

const ProductsPage = () => {
  const fetchProducts = async () => {
    const result = await findAllProductsAction();
    return result;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-4">
      <AllProducts products={productsData} />
    </div>
  );
};

export default ProductsPage;
