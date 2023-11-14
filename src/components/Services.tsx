import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <div className="grid place-items-center grid-cols-3 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 px-2">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  );
}
