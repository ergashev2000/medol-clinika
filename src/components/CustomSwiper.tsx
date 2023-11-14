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

import NewsImg from "@/assets/images/news-img.png";

const CustomSwiper = () => {
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
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      navigation
      spaceBetween={20}
      slidesPerView={3}
      loop
      breakpoints={breakpoints}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="pt-36 pb-10 flex flex-col justify-center items-center px-1 ">
        <div
          className="p-3 pb-10 max-w-sm w-full rounded-3xl border border-gray-300 relative hover:shadow"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,245,0.9127823004201681) 50%, rgba(245,245,245,0.293734681372549) 100%)",
          }}
        >
          <Image
            src={NewsImg}
            alt="Image"
            className="absolute -top-52 left-1/2 -translate-x-1/2 h-full w-[calc(100%-80px)] object-contain"
          />
          <h3 className="text-[#0D4C93] text-lg font-semibold text-center pt-20">
            Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
          </h3>
          <p className="text-[#0D4C93] text-center py-2 font-semibold">
            26.07.2021
          </p>
          <p className="text-sm text-center">
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <div className="flex justify-center pt-5 absolute -bottom-5 left-1/2 -translate-x-1/2">
            <Button>Подробнее</Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pt-36 flex flex-col justify-center items-center px-1 ">
        <div
          className="p-3 pb-10 max-w-sm w-full rounded-3xl border border-gray-300 relative hover:shadow"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,245,0.9127823004201681) 50%, rgba(245,245,245,0.293734681372549) 100%)",
          }}
        >
          <Image
            src={NewsImg}
            alt="Image"
            className="absolute -top-52 left-1/2 -translate-x-1/2 h-full w-[calc(100%-80px)] object-contain"
          />
          <h3 className="text-[#0D4C93] text-lg font-semibold text-center pt-20">
            Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
          </h3>
          <p className="text-[#0D4C93] text-center py-2 font-semibold">
            26.07.2021
          </p>
          <p className="text-sm text-center">
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <div className="flex justify-center pt-5 absolute -bottom-5 left-1/2 -translate-x-1/2">
            <Button>Подробнее</Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pt-36 flex flex-col justify-center items-center px-1 ">
        <div
          className="p-3 pb-10 max-w-sm w-full rounded-3xl border border-gray-300 relative hover:shadow"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,245,0.9127823004201681) 50%, rgba(245,245,245,0.293734681372549) 100%)",
          }}
        >
          <Image
            src={NewsImg}
            alt="Image"
            className="absolute -top-52 left-1/2 -translate-x-1/2 h-full w-[calc(100%-80px)] object-contain"
          />
          <h3 className="text-[#0D4C93] text-lg font-semibold text-center pt-20">
            Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
          </h3>
          <p className="text-[#0D4C93] text-center py-2 font-semibold">
            26.07.2021
          </p>
          <p className="text-sm text-center">
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <div className="flex justify-center pt-5 absolute -bottom-5 left-1/2 -translate-x-1/2">
            <Button>Подробнее</Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pt-36 flex flex-col justify-center items-center px-1 ">
        <div
          className="p-3 pb-10 max-w-sm w-full rounded-3xl border border-gray-300 relative hover:shadow"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,245,245,0.9127823004201681) 50%, rgba(245,245,245,0.293734681372549) 100%)",
          }}
        >
          <Image
            src={NewsImg}
            alt="Image"
            className="absolute -top-52 left-1/2 -translate-x-1/2 h-full w-[calc(100%-80px)] object-contain"
          />
          <h3 className="text-[#0D4C93] text-lg font-semibold text-center pt-20">
            Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
          </h3>
          <p className="text-[#0D4C93] text-center py-2 font-semibold">
            26.07.2021
          </p>
          <p className="text-sm text-center">
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <div className="flex justify-center pt-5 absolute -bottom-5 left-1/2 -translate-x-1/2">
            <Button>Подробнее</Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
