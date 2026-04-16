import { z } from "better-auth";
import { ReactNode } from "react";
import { insertProductsSchema } from "./schemas";

export type LayoutPropsMain = {
  children: ReactNode;
};

export interface IProductsData {
  // id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner?: string | null;
}

/* IMPORTING TYPES FROM */

export type TProductData = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};
