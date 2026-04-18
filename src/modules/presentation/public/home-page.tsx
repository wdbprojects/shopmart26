import FeaturedProducts from "@/modules/components/products/featured-products";
import HeroSection from "@/modules/components/home/hero";
import { getLatestProductsAction } from "@/_actions/product-actions";

const HomePage = async () => {
  const latestProducts = await getLatestProductsAction();

  const transformedData = latestProducts?.data?.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: Number(product.rating),
  }));

  return (
    <div className="py-4">
      <HeroSection />

      <FeaturedProducts
        success={latestProducts?.success}
        message={latestProducts?.message}
        data={transformedData ?? []}
      />
    </div>
  );
};

export default HomePage;
