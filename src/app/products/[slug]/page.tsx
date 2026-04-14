import SingleProduct from "@/modules/presentation/products/single-product";

const SingleProductMain = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  return <SingleProduct params={params} />;
};

export default SingleProductMain;
