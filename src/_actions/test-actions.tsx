"use server";

import prisma from "@/lib/prisma";

export const testPrisma = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log({ users });
  } catch (error) {
    console.log(error);
  }
};
