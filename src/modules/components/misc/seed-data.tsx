"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { productsData } from "@/lib/data";
import { seedProductsAction } from "@/_actions/product-actions";

const SeedData = () => {
  const seedDataAction = async () => {
    try {
      const response = await seedProductsAction(productsData as any);
      if (response?.success) {
        toast.success("Products seeded successfully ☘️");
      } else {
        toast.error("Error from TRY");
      }
    } catch (err) {
      toast.error("Error from CATCH");
    }
  };

  return (
    <div>
      <Button variant="outline" size="lg" onClick={seedDataAction}>
        Seed Data
      </Button>
    </div>
  );
};

export default SeedData;
