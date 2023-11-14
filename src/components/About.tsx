import Image from "next/image";
import AboutImg from "@/assets/images/about-img.png";
import Button from "./ui/Button";

export default function About() {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-semibold text-center py-16">О КОМПАНИИ</h3>
      <div
        className="relative max-w-3xl w-full pl-28 ml-auto rounded-r-3xl max-lg:pl-0 "
        style={{
          background:
            "linear-gradient(180deg, rgba(245,245,245,0.9127823004201681) 50%, rgba(245,245,245,0.293734681372549) 100%)",
        }}
      >
        <Image
          src={AboutImg}
          alt="Image"
          className="absolute -left-[430px] top-1/2 -translate-y-1/2 max-lg:hidden"
        />
        <div className="px-5 py-10 flex flex-col gap-10">
          <p>
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли.
            {"U+0412"}
            2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services. Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.
          </p>

          <Button>Узнать больше</Button>
        </div>
      </div>
    </div>
  );
}
