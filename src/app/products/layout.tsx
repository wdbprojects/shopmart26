import PublicLayout from "@/modules/layouts/public-layout";
import { LayoutPropsMain } from "@/config/types";

const ProductLayoutMain = ({ children }: LayoutPropsMain) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default ProductLayoutMain;
