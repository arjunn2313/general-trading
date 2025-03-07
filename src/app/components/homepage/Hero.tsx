"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Luxury Hotel Essentials",
    subtitle: "Premium Bathrobes & Linens",
    oldPrice: "AED 499",
    newPrice: "AED 399",
    image: "/hero/sample-1.jpg",
  },
  {
    id: 2,
    title: "Housekeeping Supplies",
    subtitle: "Top-Quality Cleaning Tools",
    oldPrice: "AED 299",
    newPrice: "AED 199",
    image: "/hero/sample-2.jpg",
  },
  {
    id: 3,
    title: "Commercial Coffee Machines",
    subtitle: "Perfect Brews Every Time",
    oldPrice: "AED 799",
    newPrice: "AED 599",
    image: "/hero/sample-3.jpg",
  },
];

export default function Hero() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative  w-full h-[400px]   md:h-[500px] lg:h-[600px]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75 "
              />
              <div className="absolute   inset-0 flex items-center justify-start max-w-6xl mx-auto">
                <div className="text-white px-6 md:space-y-4 text-center md:text-left">
                  <p className="text-sm lg:text-lg uppercase tracking-wide">
                    Explore Our Premium Collections
                  </p>
                  <h2 className="text-3xl md:text-6xl font-bold md:leading-relaxed">
                    {slide.title} <br /> {slide.subtitle}
                  </h2>
                  {/* <p className="text-lg mt-2">
                    <span className="text-primary font-semibold">
                      Old Price: {slide.oldPrice}
                    </span>{" "}
                    <br />
                    <span className="text-green-400 font-semibold">
                      New Price: {slide.newPrice}
                    </span>
                  </p> */}
                  <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
