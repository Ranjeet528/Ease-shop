import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



export default function Slider  ({title,products}){
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 ">
      {/* heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-[#1c1c1c]">
          {title}
        </h2>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2.2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white border border-gray-200 rounded-2xl p-3 h-full hover:shadow-md transition-all duration-300">
              
              {/* IMAGE */}
              <div className="w-full flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[140px] h-[140px] object-contain"
                />
              </div>

              {/* DELIVERY */}
              <div className="mt-2">
                <span className="bg-gray-100 text-[11px] font-bold px-2 py-[3px] rounded-md">
                  ⏱ 9 MINS
                </span>
              </div>

              {/* PRODUCT NAME */}
              <h3 className="text-[15px] font-bold leading-5 mt-3 text-[#1c1c1c] line-clamp-2 min-h-[40px]">
                {item.name}
              </h3>

              {/* QUANTITY */}
              <p className="text-gray-500 text-[14px] mt-1">
                {item.qty}
              </p>

              {/* PRICE + BUTTON */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-[18px] font-bold text-[#1c1c1c]">
                  ₹{item.price}
                </p>

                <button className="border border-green-700 text-green-700 bg-green-50 font-bold text-[14px] px-5 py-1.5 rounded-lg hover:bg-green-700 hover:text-white transition">
                  ADD
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};






