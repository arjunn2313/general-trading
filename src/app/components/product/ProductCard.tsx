 "use client";

import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  brand?: string;
  price: string;
  oldPrice?: string;
  discount?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-400 rounded-lg p-4 shadow-md relative bg-white h-[400px] flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative h-[200px] flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain overflow-hidden"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-md font-semibold mt-3 text-center">{product.name}</h3>
        {product.brand && <p className="text-gray-500 text-sm text-center">{product.brand}</p>}

        {/* Pricing */}
        <div className="mt-2 flex items-center justify-center">
          <span className="text-red-600 font-bold text-lg">{product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through ml-2">
              {product.oldPrice}
            </span>
          )}
          {product.discount && (
            <span className="ml-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
              {product.discount}
            </span>
          )}
        </div>
      </div>

      {/* WhatsApp Button */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
        <FaWhatsapp className="text-xl" /> Know More
      </button>
    </div>
  );
};

export default ProductCard;
