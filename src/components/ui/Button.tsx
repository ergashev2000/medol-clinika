"use client";

import React from "react";
import { useModal } from "../CreateContext";

export default function Button({ children }: any) {

  return (
    <button
      className="text-white rounded-full px-12 py-3 w-fit whitespace-nowrap bg-gradient-to-r from-blue-700 via-blue-500 to-teal-500 hover:to-teal-300 hover:from-teal-300 transition-all duration-500"
    >
      {children}
    </button>
  );
}
