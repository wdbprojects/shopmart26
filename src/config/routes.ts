export const routes = {
  home: "/",
  about: "/about",

  /* DASHBOARD */
  dashboard: "/dashboard",
  /* AUTH */
  login: "/auth/login",
  register: "/auth/register",
  /* PRODUCTS */
  products: "/products",
  singleProduct: (slug: string) => {
    return `/products/${slug}`;
  },
};
