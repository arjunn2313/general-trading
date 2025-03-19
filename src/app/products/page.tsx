"use client";

import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import products from "@/data/product";
import categories from "@/data/categories";
import Image from "next/image";

type Product = {
  id: number;
  image: string;
  price?: string | number;
  sku: string | number;
  category: string;
  supplier?: string;
  description: string;
}

export default function ProductPage() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const router = useRouter();

  // Filter products based on category query if it exists
  const filteredProducts = categoryQuery
    ? products.filter((product) => product.category === categoryQuery)
    : products;

  // Handle category click
  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("category") === category) {
      params.delete("category"); // Remove filter if clicked again
    } else {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <section>
      {/* Breadcrumbs */}
      <div className="bg-gray-200 py-10 px-5 font-medium text-black">
        Home | Products
      </div>

      <div className=" md:block p-6">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="md:overflow-hidden overflow-x-scroll flex gap-4 w-full snap-x snap-mandatory">
          {categories.map((subcategory, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => handleCategoryClick(subcategory.name)}
            >
              <div
                className={`w-20 h-20  flex items-center justify-center  rounded-md overflow-hidden border-2 ${
                  categoryQuery && categoryQuery === subcategory.name
                    ? "border-primary "
                    : "border-gray-200"
                }`}
              >
                {/* <span className="text-gray-500 text-xs">No Image</span> */}
                <Image
                  src={subcategory.image}
                  alt="Category Image"
                  width={80}
                  height={80}
                  className="object-cover "
                  loading="lazy"
                />
              </div>
              <p className="mt-2  text-sm font-medium">{subcategory.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded-md">
          <div className="flex items-center gap-2">
            <button className="p-2 bg-gray-800 text-white rounded-md">▦</button>
            <p>There are {filteredProducts.length} products.</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product:Product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found for "{categoryQuery}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
