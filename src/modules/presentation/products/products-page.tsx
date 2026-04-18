import AllProducts from "@/modules/components/products/all-products";
import { getAllProductsAction } from "@/_actions/product-actions";

const ProductsPage = async () => {
  const latestProducts = await getAllProductsAction();

  const transformedData = latestProducts?.data?.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: Number(product.rating),
  }));

  return (
    <div className="py-4">
      <AllProducts products={transformedData ?? []} />
    </div>
  );
};

export default ProductsPage;
