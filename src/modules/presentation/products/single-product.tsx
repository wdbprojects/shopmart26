import { productsData } from "@/lib/data";

const SingleProduct = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const selectedProduct = productsData.find((product) => {
    return product.slug === slug;
  });

  return <div>Product: {slug}</div>;
};

export default SingleProduct;
