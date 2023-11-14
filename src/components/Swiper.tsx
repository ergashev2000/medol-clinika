"use client";

import Image from "next/image";

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

import Slide1 from "@/assets/images/slide-1.png";
import Slide2 from "@/assets/images/slide-2.png";
import Slide3 from "@/assets/images/slide-3.png";
import Button from "./ui/Button";

const data = [
  {
    id: 1,
    title: "Анализатор ABL800 FLEX",
    description:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    img: Slide1,
  },
  {
    id: 2,
    title: "Аппарат ИК-лазерный МАКДЭЛ-09.1",
    description:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    img: Slide2,
  },
  {
    id: 3,
    title: "Система для аутогемотрансфузии",
    description:
      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
    img: Slide3,
  },
];

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <div className=" flex items-center justify-evenly px-5 pb-12 max-lg:justify-start max-lg:pt-10">
            <div className="flex  flex-col gap-5 max-w-[600px]">
              <h2 className="text-3xl text-[#0D4C93] font-semibold max-md:text-lg">
                {item.title}
              </h2>
              <p className="text-lg max-md:text-sm">{item.description}</p>
              <Button>Подробнее</Button>
            </div>

            <Image
              src={item.img}
              alt="Image"
              className=" h-[350px] object-contain 2xl:h-[500px] max-lg:hidden"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
