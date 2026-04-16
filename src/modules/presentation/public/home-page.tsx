import FeaturedProducts from "@/modules/components/products/featured-products";
import HeroSection from "@/modules/components/home/hero";
// import { Button } from "@/components/ui/button";
// import { testPrisma } from "@/_actions/test-actions";
import {
  getLatestProductsAction,
  // seedProductsAction,
} from "@/_actions/product-actions";
import { convertToDB } from "better-auth/db";
import { convertToPlainObject } from "@/lib/utils";
// import { toast } from "sonner";

const HomePage = async () => {
  /* const seedProducts = async () => {
    const result = await seedProductsAction(productsData as any);
    if (result) {
      toast.success(result.message);
      console.log(result.data);
    } else {
      toast.error("Error seeding products");
    }
  }; */

  const result = await getLatestProductsAction();
  // const transformedData = convertToPlainObject(result?.data);

  const transformedData = result?.data?.map((product) => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));

  console.log(transformedData);

  return (
    <div className="py-4">
      <HeroSection />

      <FeaturedProducts
        success={result?.success}
        message={result?.message}
        data={transformedData}
      />
      <hr className="p-4" />
      {/* <Button onClick={() => testPrisma()}>Test User Action</Button>
      <Button onClick={seedProducts}>Seed Products</Button> */}
    </div>
  );
};

export default HomePage;
