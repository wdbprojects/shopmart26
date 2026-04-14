"use server";

import prisma from "@/lib/prisma";

export const findProductById = async (id: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id: id },
    });
  } catch (error) {
    console.log(error);
  }
};
