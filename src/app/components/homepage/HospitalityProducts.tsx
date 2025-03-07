"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const hospitalityProducts = [
  {
    id: 1,
    name: "White Towel Collection ",
    image: "/product/81VUQmd2YuL.jpg",
    brand: "H&Z White Linen",
    price: "AED 120",
    oldPrice: "AED 150",
    discount: "Save 20%",
  },
  {
    id: 2,
    name: "Luxury Bathrobe White ",
    image: "/product/51XvUX2c0aL._SL1280_.jpg",
    brand: "H&Z White Linen",
    price: "AED 180",
    oldPrice: "AED 220",
    discount: "Save 18%",
  },

  {
    id: 4,
    name: "G. Design Towel ",
    image: "/product/Screenshot_20230923_080426_Upwork_Client__76904.jpg",
    brand: "H&Z White Linen",
    price: "AED 75",
    oldPrice: "AED 95",
    discount: "Save 21%",
  },
  {
    id: 5,
    name: "Bath Rugs  ",
    image: "/product/-473Wx593H-700379285-grey-MODEL.jpg",
    brand: "H&Z White Linen",
    price: "AED 140",
    oldPrice: "AED 170",
    discount: "Save 18%",
  },
  {
    id: 6,
    name: "Hotel Quality Napkins  ",
    image: "/product/819uxc1Qj2L.jpg",
    brand: "H&Z White Linen",
    price: "AED 30",
    oldPrice: "AED 40",
    discount: "Save 25%",
  },
];

export default function HospitalityProducts() {
    return (
      <section className="py-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold">Hospitality Products</h2>
          <p className="text-gray-500">
            Check out our collection of the top Hospitality Products that encourage conversion.
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
            {hospitalityProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="border border-gray-400 rounded-lg p-4 shadow-md bg-white flex flex-col justify-between h-full">
                  {/* Image Section */}
                  <div className="relative h-[200px] flex justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain h-full"
                    />
                  </div>
  
                  {/* Product Details */}
                  <h3 className="text-md font-semibold mt-3 h-[40px] text-ellipsis overflow-hidden">
                    {product.name}
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
