import { z } from "better-auth";
import { ReactNode } from "react";
import { insertProductsSchema } from "./schemas";

export type LayoutPropsMain = {
  children: ReactNode;
};

/* IMPORTING TYPES FROM */

export type TProductData = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: number | string;
  numReviews: number;
  createdAt: Date;
};
