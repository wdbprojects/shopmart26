"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="rounded-md">
        <Image
          src={images[index]}
          alt={images[index]}
          height={1000}
          width={1000}
          className="min-h-75 rounded-sm object-cover object-center p-1 transition"
        />
      </div>
      <div className="bg-muted/50 mt-2 flex flex-row justify-start gap-2 p-1">
        {images?.map((img, idx) => {
          console.log(img);
          return (
            <div key={img}>
              <Image
                src={img}
                height={80}
                width={80}
                alt={img}
                onClick={() => {
                  setIndex(idx);
                }}
                className={cn(
                  index === idx &&
                    "opacity-70! ring-3 ring-emerald-600 hover:cursor-default hover:opacity-70! hover:ring-3! hover:ring-emerald-600!",
                  "cursor-pointer rounded-xs opacity-80 transition hover:opacity-100 hover:ring-2 hover:ring-fuchsia-800",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
