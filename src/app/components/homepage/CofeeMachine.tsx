 "use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const coffeeMachines = [
  {
    id: 1,
    name: "Espresso Cappuccino Machine",
    model: "Undici A1",
    image: "/product/6823541_1200x1200.webp", // Replace with actual image path
    brand: "CASADIO",
    price: "AED 5800",
    oldPrice: "AED 6500",
    discount: "Save 11%",
  },
  {
    id: 2,
    name: "Espresso Cappuccino Machine",
    model: "Undici A1 WD",
    image: "/product/6623ff04c1c04f123069faae-capresso-espresso.jpg", // Replace with actual image path
    brand: "CASADIO",
    price: "AED 6200",
    oldPrice: "AED 7000",
    discount: "Save 12%",
  },
  {
    id: 3,
    name: "Espresso Cappuccino Machine",
    model: "Undici A2",
    image: "/product/6623ff04c1c04f123069faae-capresso-espresso.jpg", // Replace with actual image path
    brand: "CASADIO",
    price: "AED 8000",
    oldPrice: "AED 9000",
    discount: "Save 11%",
  },
  {
    id: 4,
    name: "Professional Barista Machine",
    model: "Elektra KUP",
    image: "/product/6623ff04c1c04f123069faae-capresso-espresso.jpg", // Replace with actual image path
    brand: "Elektra",
    price: "AED 12000",
    oldPrice: "AED 13500",
    discount: "Save 11%",
  },
  {
    id: 5,
    name: "Automatic Coffee Machine",
    model: "Nuova Simonelli Appia",
    image: "/product/6623ff04c1c04f123069faae-capresso-espresso.jpg", // Replace with actual image path
    brand: "Nuova Simonelli",
    price: "AED 15000",
    oldPrice: "AED 17000",
    discount: "Save 12%",
  },
];

export default function CoffeeMachines() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold">Coffee Machines</h2>
        <p className="text-gray-500">
          Explore our premium range of commercial espresso machines.
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
          {coffeeMachines.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border border-gray-400 rounded-lg p-4 shadow-md bg-white flex flex-col justify-between h-full">
                {/* Image Section */}
                <div className="relative h-[200px] flex justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.name} (${product.model})`}
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-md font-semibold mt-3 h-[50px] text-ellipsis overflow-hidden">
                  {product.name} ({product.model})
                </h3>
                <p className="text-gray-500 text-sm">{product.brand}</p>

                {/* Pricing */}
                <div className="my-2 flex items-center">
                  <span className="text-red-600 font-bold text-lg">{product.price}</span>
                  <span className="text-gray-500 line-through ml-2">
                    {product.oldPrice || <span className="opacity-0">AED 000</span>}
                  </span>
                  <span className="ml-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    {product.discount || <span className="opacity-0">Save 00%</span>}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full mt-auto flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
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
