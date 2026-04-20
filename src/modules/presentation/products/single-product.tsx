import { getProductBySlug } from "@/_actions/product-actions";
import { TProductData } from "@/config/types";
import SingleProductDetails from "@/modules/components/products/single-product-details";
import { notFound } from "next/navigation";

const SingleProduct = async ({ slug }: { slug: string }) => {
  const singleProductData = await getProductBySlug(slug);
  if (!singleProductData?.success) {
    return notFound();
  }
  return (
    <div>
      <SingleProductDetails
        product={singleProductData?.data as TProductData | undefined}
      />
    </div>
  );
};

export default SingleProduct;
