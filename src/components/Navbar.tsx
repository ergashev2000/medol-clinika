"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MapIcon from "../assets/icons/map-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import SearchIcon from "../assets/icons/search-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import Logo from "../assets/images/logo.svg";
import FlagRu from "../assets/images/flag-ru.svg";
import FlagUz from "../assets/images/flag-uz.svg";
import FlagEn from "../assets/images/flag-en.svg";
import Menu from "../assets/icons/menu.svg";

export default function Navbar() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);

  const handleOpenSearch = () => {
    setIsOpenSearch(prev => !prev);
  };

  const handleOpenLang = () => {
    setIsOpenLang(prev => !prev);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center justify-evenly w-[50%] max-lg:order-2 max-md:w-auto">
          <div className="flex gap-3 items-center max-md:hidden">
            <div className="bg-white rounded-full w-10 h-10 shadow flex justify-center items-center">
              <Image src={MapIcon} alt="Map Icon" />
            </div>
            <p className="max-lg:hidden">
              г.Ташкент, Чиланзар 10 <br /> квартал, дом 3/1
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Link
              href={"tel:+998712766253"}
              className="bg-white rounded-full w-10 h-10 shadow flex justify-center items-center"
            >
              <Image src={PhoneIcon} alt="Phone Icon" />
            </Link>
            <div className="flex flex-col max-lg:hidden">
              <Link href={"/"}>+998 71 276-62-53</Link>
              <Link href={"/"}>+998 71 276-62-54</Link>
            </div>
          </div>
        </div>

        <Link href={"/"} className="w-30 max-lg:order-1">
          <Image src={Logo} alt="Logo" className="w-full object-cover" />
        </Link>

        <div className="flex items-center justify-evenly w-[50%] max-lg:order-3 gap-3 max-md:w-auto">
          <div className="bg-white flex items-center rounded-full relative z-50 max-md:hidden">
            <button
              className="bg-white w-12 h-12 max-lg:w-10 max-lg:h-10 rounded-full flex justify-center items-center z-10"
              onClick={handleOpenSearch}
            >
              <Image src={SearchIcon} alt="Search icon" />
            </button>
            <input
              type="text"
              id="search"
              placeholder="Поиск по сайту"
              className={`rounded-full h-12 pl-14 absolute left-0 transition-all duration-500 ${
                isOpenSearch ? "w-[500px] max-lg:w-[200px]" : "w-0 opacity-0"
              }`}
            />
          </div>

          <Link
            href={"https://facebook.com/"}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-white max-lg:h-10 max-lg:w-10 rounded-full shadow px-3"
          >
            <div className=" flex justify-center items-center">
              <Image src={FacebookIcon} alt="Facebook icon" />
            </div>
            <p className="max-lg:hidden">Мы на Facebook</p>
          </Link>
          <div
            className="flex items-center justify-center gap-2 cursor-pointer w-fit bg-white h-10 rounded-full shadow px-2 relative"
            onClick={handleOpenLang}
          >
            <Image src={FlagRu} alt="Icon" />
            <p className="max-lg:hidden">Русский</p>
            <span className="w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="arrow"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                xmlSpace="preserve"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m20.5 11.5-6 6-6-6"
                ></path>
              </svg>
            </span>
            <div
              className={`absolute top-14 right-0 z-20 bg-white shadow py-2 rounded-2xl transition-all duration-500 ${
                isOpenLang
                  ? "block -translate-y-0"
                  : "hidden opacity-0 -translate-y-10"
              }`}
            >
              <ul className="flex flex-col items-center justify-center">
                <li className="flex gap-3 items-center py-2 px-5 max-lg:px-3 hover:bg-[#ECF5F5] w-full">
                  <Image src={FlagRu} alt="Icon" className="rounded-full" />
                  <p className="max-lg:hidden">Русский</p>
                </li>
                <li className="flex gap-3 items-center py-2 px-5 max-lg:px-3 hover:bg-[#ECF5F5] w-full">
                  <Image src={FlagUz} alt="Icon" className="rounded-full" />
                  <p className="max-lg:hidden">O’zbekcha</p>
                </li>
                <li className="flex gap-3 items-center py-2 px-5 max-lg:px-3 hover:bg-[#ECF5F5] w-full">
                  <Image src={FlagEn} alt="Icon" className="rounded-full" />
                  <p className="max-lg:hidden">English</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="min-w-[50px] h-10 bg-white rounded-full shadow order-4 flex justify-center items-center">
          <Image src={Menu} alt="Image" />
        </div>
      </div>
      <nav className="py-5 max-md:hidden">
        <ul className="flex justify-between items-center bg-white shadow w-full rounded-full overflow-hidden [&>li]:border-r-2 [&>li]:border-gray-200">
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1  text-[#0D4C93] hover:bg-[#00c9c951] transition-all duration-500"
            >
              МАГАЗИН
            </Link>
          </li>
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1 relative  hover:bg-[#00c9c951] transition-all duration-500 before:w-3 before:h-3 before:rounded-full before:bg-[#00C9C9] before:absolute before:top-2 before:right-5 text-[#00C9C9]"
            >
              О КОМПАНИИ
            </Link>
          </li>
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1  text-[#0D4C93] hover:bg-[#00c9c951] transition-all duration-500"
            >
              ПРОДУКЦИЯ
            </Link>
          </li>
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1  text-[#0D4C93] hover:bg-[#00c9c951] transition-all duration-500"
            >
              УСЛУГИ
            </Link>
          </li>
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1  text-[#0D4C93] hover:bg-[#00c9c951] transition-all duration-500"
            >
              АКЦИИ И НОВОСТИ
            </Link>
          </li>
          <li className="rounded-s-full w-full">
            <Link
              href={"/"}
              className="w-full text-center h-14 flex justify-center items-center px-1  text-[#0D4C93] hover:bg-[#00c9c951] transition-all duration-500"
            >
              ОБРАТНАЯ СВЯЗЬ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
