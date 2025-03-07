"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "4 Compartment Recycle Bin",
    image: "/product/H85cc80fa80f249f191e29beb559584d3W.png_720x720q50.avif",
    brand: "EcoFriendly",
    rating: 4,
    price: "AED 975",
    oldPrice: "AED 1,200",
    discount: "Save 19%",
  },
  {
    id: 2,
    name: "Multipurpose Cleaning Cart",
    image: "/product/AF08181A-1300-.jpg",
    brand: "CleanPro",
    rating: 5,
    price: "AED 575",
    oldPrice: "AED 700",
    discount: "Save 18%",
  },
  {
    id: 3,
    name: "Automatic Air Freshener Dispenser",
    image: "/product/A12-700x700.jpg",
    brand: "FreshAroma",
    rating: 4,
    price: "AED 50",
    oldPrice: "AED 65",
    discount: "Save 23%",
  },
  {
    id: 4,
    name: "Wall-Mounted Tissue Dispenser",
    image:
      "/product/full-steel-ss304-heavy-duty-multifold-tissue-dispenserwall-mounted-silver-918912.jpg",
    brand: "HygieneMaster",
    rating: 3,
    price: "AED 60",
    oldPrice: "AED 75",
    discount: "Save 20%",
  },
  {
    id: 5,
    name: "Industrial Vacuum Cleaner (50L)",
    image:
      "/product/forever-gold-1800-w-65-mm-pipe-dia-50-l-wet-dry-vacuum-cleaner-vc-50l-500x500.webp",
    brand: "SuperClean",
    rating: 5,
    price: "AED 5,000",
    oldPrice: "AED 5,800",
    discount: "Save 14%",
  },
];

export default function HouseKeepingproduct() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold">Housekeeping Products</h2>
        <p className="text-gray-500">
          Check out our collection of the top Housekeeping Products that
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
          className="mt-6 "
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border  border-gray-400 rounded-lg p-4 shadow-md relative bg-white">
                {/* Image Section */}
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto object-contain"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-md font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.brand}</p>

                {/* Pricing */}
                <div className="mt-2 flex items-center">
                  <span className="text-red-600 font-bold text-lg">
                    {product.price}
                  </span>
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

                {/* Add to Cart Button */}
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                  <FaWhatsapp className="text-xl" /> Know More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
