"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { useModal } from "./CreateContext";

export default function Modal() {
  const { isOpenModal, setIsOpenModal } = useModal();

  const handleOpenModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className={`bg-black bg-opacity-50 w-full h-full fixed left-0 top-0 z-50 transition-all duration-500 ${
          isOpenModal ? "block translate-y-0 opacity-100" : "hidden opacity-0 -translate-y-20"
        }`}
      >
        <div className="bg-white max-w-lg w-full min-h-[500px] rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 relative">
          <button
            className="bg-white shadow rounded-full w-8 h-8 absolute right-5 top-5 flex justify-center items-center cursor-pointer"
            onClick={handleOpenModal}
          >
            &#10006;
          </button>
          <h3 className="text-center font-semibold text-xl text-[#5A5A5A]">
            Оставьте заявку
          </h3>
          <form className="flex flex-col gap-3 p-5">
            <input
              type="text"
              placeholder="ФИО"
              className="w-full py-3 px-4 bg-[#F6F6F6] rounded-2xl"
              required
            />
            <input
              type="number"
              placeholder="Номер телефона*"
              className="w-full py-3 px-4 bg-[#F6F6F6] rounded-2xl"
              required
            />
            <input
              type="text"
              placeholder="Тема обращения*"
              className="w-full py-3 px-4 bg-[#F6F6F6] rounded-2xl"
              required
            />

            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              placeholder="Сообщение*"
              className="w-full py-3 px-4 bg-[#F6F6F6] rounded-2xl resize-y"
            />

            <div className="flex gap-3 relative pl-4 cursor-pointer">
              <input
                type="checkbox"
                id="checkbox"
                className="appearance-none before:w-5 before:h-5 before:bg-[#F3F3F3] before:rounded before:absolute before:left-0 before:top-2 before:checked:bg-[#00C9C9]"
                required
              />
              <label htmlFor="checkbox" className="cursor-pointer">
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </label>
            </div>

            <div className="flex  justify-center items-center">
              <Button>Отправить</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
