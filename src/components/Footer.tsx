'use client'

import Image from "next/image";
import Link from "next/link";
import MapIcon from "@/assets/icons/map-icon.svg";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import { useModal } from "./CreateContext";

export default function Footer() {
  const { isOpenModal, setIsOpenModal } = useModal();
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <footer>
      <div className="py-10 flex justify-between  gap-10 px-5">
        <div className="w-1/2 flex flex-col gap-5 max-lg:flex-col max-lg:w-full">
          <Image src={Logo} alt="Logo" width={150} height={150} className="hidden max-md:block"/>

          <div className="flex gap-3 max-lg:justify-between max-md:flex-col">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <div className=" flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className=" min-h-[50px] min-w-[50px] rounded-full bg-white shadow flex justify-center items-center">
                  <Image src={MapIcon} alt="Map Icon" width={20} height={20} />
                </div>
                <p className="text-sm">
                  г.Ташкент, Чиланзар 10 <br /> квартал, дом 3/1
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="min-h-[50px] min-w-[50px]  rounded-full bg-white shadow flex justify-center items-center">
                  <Image src={MapIcon} alt="Map Icon" width={20} height={20} />
                </div>
                <p className="text-sm">
                  г.Ташкент, Чиланзар 10 <br /> квартал, дом 3/1
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="min-h-[50px] min-w-[50px] max-w-[50px] max-h-[50px] rounded-full bg-white shadow flex justify-center items-center">
                  <Image
                    src={MapIcon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <Link href="/">+998 71 276-62-53</Link>
                  <Link href="/">+998 71 276-62-54</Link>
                </div>
              </div>

              <button
                className="text-white rounded-full px-12 py-3 w-fit whitespace-nowrap bg-gradient-to-r from-blue-700 via-blue-500 to-teal-500 hover:to-teal-300 hover:from-teal-300 transition-all duration-500"
                onClick={handleOpenModal}
              >
                Оставить заявку
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
                className="max-md:hidden"
              />
              <p className="text-sm">
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить
                огромную пользу населению, путем решения глобальных вопросов.
                Внедряя инновационные технологии на рынок Узбекистана.
              </p>
            </div>
          </div>
        </div>
        <ul className="flex gap-2 w-1/2 justify-between max-lg:hidden">
          <li>
            <h4 className="text-lg font-semibold pb-3">О компании</h4>
            <ul className="text-sm flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  История
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Партнеры
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Вакансии
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="text-lg font-semibold pb-3">Продукция</h4>
            <ul className="text-sm flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Эндоваскулярная хирургия
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Аритмология
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Кардиохирургия
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Лабораторная диагностика
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Хирургия
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Эндоурология
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Нейрохирургия
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Анестезиология и реанимация
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Диабет
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="text-lg font-semibold pb-3">Услуги</h4>
            <ul className="text-sm flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Сервис
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Регистрации
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00C9C9] transition-all duration-300 hover:underline"
                >
                  Услуги логистики
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className=" flex justify-between items-center text-sm py-5">
        <h5>© 2021 ООО «Medical Online Services»</h5>
        <h5 className="max-lg:hidden">
          Сайт разработан компанией <Link href={"/"}>www.uz</Link>
        </h5>
      </div>
    </footer>
  );
}
