import SingleProduct from "@/modules/presentation/products/single-product";

const SingleProductMain = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return <SingleProduct slug={slug} />;
};

export default SingleProductMain;
