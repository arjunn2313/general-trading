"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../product/ProductCard";
import products from "../../data/product";

interface Product {
  id: number;
  name: string;
  image: string;
  brand?: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  category: string;
}

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section className="py-10 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold">{category} Products</h2>
        <p className="text-gray-500">
          Check out our collection of the top {category} products that
          encourage conversion.
        </p>

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
