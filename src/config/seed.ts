import { PrismaClient } from "@/generated/prisma/client";
import { productsData } from "@/lib/data";
import { PrismaPg } from "@prisma/adapter-pg";
// import prisma from "@/lib/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const seedData = async () => {
  // await prisma.product.deleteMany();
  // await prisma.product.createMany({ data: productsData });
  // console.log("Database seeded successfully ☘️");
  // console.log("testing seed file");
  const prisma = new PrismaClient({ adapter: adapter });
  const user = await prisma.user.findMany();
  console.log(user);
};

seedData();
