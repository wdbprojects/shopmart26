import AllProducts from "@/modules/components/products/all-products";
import { productsData } from "@/lib/data";

const ProductsPage = () => {
  return (
    <div className="py-4">
      <AllProducts products={productsData} />
    </div>
  );
};

export default ProductsPage;
