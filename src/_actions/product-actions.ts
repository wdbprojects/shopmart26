"use server";

import { TProductData } from "@/config/types";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { convertToPlainObject } from "@/lib/utils";

export const seedProductsAction = async (data: TProductData) => {
  try {
    await prisma.product.deleteMany();
    const seededProducts = await prisma.product.createMany({ data });
    return {
      success: true,
      message: "Products seeded successfully",
      data: seededProducts,
    };
  } catch (error) {
    console.log(error);
  }
};

/* GET ALL PRODUCTS */
export const getLatestProductsAction = async () => {
  try {
    const data = await prisma.product.findMany({
      take: Number(LATEST_PRODUCTS_LIMIT),
      orderBy: { createdAt: "desc" },
    });
    return {
      success: true,
      message: "Featured products fetched successfully",
      data: convertToPlainObject(data),
    };
  } catch (error) {
    console.log(error);
  }
};

/* GET ALL PRODUCTS */
export const getAllProductsAction = async () => {
  try {
    const products = await prisma.product.findMany();
    return {
      success: true,
      message: "Successfully fetched all products",
      data: convertToPlainObject(products),
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Unkown server error!!" };
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: slug },
    });
    if (product) {
      return {
        success: true,
        message: "Successfully fetched product",
        data: convertToPlainObject(product),
      };
    } else {
      return {
        success: false,
        message: "Product not found",
      };
    }
  } catch (error) {
    console.log(error);
  }
};
