"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../product/ProductCard";
import products from "../../data/product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Product {
  id: number;
  description: string;
  image: string;
  brand?: string;
  price:  number;  
  category: string;
  sku?: string | number;  
}


interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = category
  ? products.filter((product) => product.category === category).slice(0, 10)
  : products.slice(0, 10);

  return (
    <section className="py-10 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">{category} Products</h2>
            <p className="text-gray-500">
              Check out our collection of the top {category} products that
              encourage conversion.
            </p>
          </div>
          <Link
            className="hidden md:flex items-center gap-3 text-primary hover:text-red-700 hover:underline"
            href={`/products?category=${category}`}
          >
            View All <FaArrowRightLong />
          </Link>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-6"
        >
          {filteredProducts.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductList;
