"use client";

import Image from "next/image";
import Button from "./ui/Button";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Logo1 from "@/assets/images/Partnest/1.png";
import Logo2 from "@/assets/images/Partnest/2.png";
import Logo3 from "@/assets/images/Partnest/3.png";
import Logo4 from "@/assets/images/Partnest/4.png";

export default function Partners() {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <div className="py-10 px-2">
        <h2 className="text-[#0D4C93] text-2xl font-semibold text-center py-10">
          ПАРТНЕРЫ
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            navigation
            spaceBetween={20}
            slidesPerView={4}
            loop
            breakpoints={breakpoints}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer mb-5">
                <Image src={Logo1} alt="Image" className="" />
              </div>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer">
                <Image src={Logo2} alt="Image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer mb-5">
                <Image src={Logo3} alt="Image" className="" />
              </div>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer">
                <Image src={Logo4} alt="Image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer mb-5">
                <Image src={Logo1} alt="Image" className="" />
              </div>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer">
                <Image src={Logo2} alt="Image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer mb-5">
                <Image src={Logo3} alt="Image" className="" />
              </div>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer">
                <Image src={Logo4} alt="Image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer mb-5">
                <Image src={Logo1} alt="Image" className="" />
              </div>
              <div className="p-5 w-full max-w-md border border-gray-300 rounded-3xl flex justify-center items-center cursor-pointer">
                <Image src={Logo2} alt="Image" className="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
