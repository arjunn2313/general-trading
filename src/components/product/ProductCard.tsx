"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Product = {
  id: number;
  image: string;
  price?: string | number;
  sku: string | number;
  category: string;
  supplier?: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const message = encodeURIComponent(
    `Hello, I would like to know more about this product.\n\nName: ${product.description}\nBrand: ${product.category}`
  );

  return (
    <div className="border border-gray-400 rounded-lg p-4 shadow-md relative bg-white h-[400px] flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative overflow-hidden h-[200px] flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.description}
          width={200}
          height={200}
          className="object-contain overflow-hidden"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-md font-semibold mt-3 text-center">
          {product.description}
        </h3>
  

        {/* Pricing */}
        <div className="mt-2 flex items-center justify-center">
          <span className="text-red-600 font-bold text-lg">
            {product.price !== "" && `AED  ${product.price}`}
          </span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/+917994202313?text=${message}`}
        target="_blank"
        className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        <FaWhatsapp className="text-xl" /> Know More
      </Link>
    </div>
  );
};

export default ProductCard;
