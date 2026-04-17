import { formatNumberWithDecimal } from "@/lib/utils";
import { z } from "zod";

// INSERT PRODUCTS SCHEMA

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    { message: "Price must have two decimal places" },
  );
export const insertProductsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must have at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must have at least 3 characters" }),
  category: z
    .string()
    .min(3, { message: "Category must have at least 3 characters" }),
  brand: z
    .string()
    .min(3, { message: "Brand must have at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must have at least 3 characters" }),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, { message: "Products must have at least one image" }),
  isFeatured: z.string(),
  banner: z.string().nullable(),
  price: currency,
});
