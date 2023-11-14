import Image from "next/image";
import Service1 from "@/assets/images/service1.png";
import Button from "./ui/Button";

export default function ServiceCard() {
  return (
    <>
      <div className="rounded-3xl bg-white relative max-w-xs w-full cursor-pointer hover:[&>div>img]:scale-105 hover:shadow-lg tranall  duration-500 my-5">
        <div className="w-full overflow-hidden rounded-t-3xl">
          <Image
            src={Service1}
            alt="Image"
            className="w-full h-44 object-cover transition-all duration-500"
          />
        </div>
        <div className="flex justify-center flex-col gap-2 p-5">
          <h3 className="text-lg text-center font-semibold text-[#0D4C93]">
            СЕРВИС ОБОРУДОВАНИЯ
          </h3>
          <p className="text-sm text-center pb-10">
            Компания предоставляет сервисное обслуживание по всем
            предоставляемым продуктам. У наших инженеров имеется опыт и
            сертификаты фирм производителей......
          </p>
          <button
            className="bg-[#0D4C93] text-white rounded-full px-16 py-3 w-fit absolute -bottom-5 left-1/2 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,76,147,1) 26%, rgba(51,163,185,1) 94%)",
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </>
  );
}
