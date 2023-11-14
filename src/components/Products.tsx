import Link from "next/link";
import Image from "next/image";

import ProductsCard from "@/components/ProductsCard";

import Product1 from "@/assets/images/product-images/product1.png";
import Product2 from "@/assets/images/product-images/product2.png";
import Product3 from "@/assets/images/product-images/product3.png";
import Product4 from "@/assets/images/product-images/product4.png";
import Product5 from "@/assets/images/product-images/product5.png";
import Product6 from "@/assets/images/product-images/product6.png";
import ArrowR from '../assets/icons/arrow-r.svg'


const products = [
  {
    id: 1,
    title: "Эндоваскулярная хирургия",
    img: Product1,
  },
  {
    id: 2,
    title: "Лабораторная диагностика",
    img: Product2,
  },
  {
    id: 3,
    title: "Кардиохирургия",
    img: Product3,
  },
  {
    id: 4,
    title: "ДИАБЕТ",
    img: Product4,
  },
  {
    id: 5,
    title: "ЭНДОУРОЛОГИЯ",
    img: Product5,
  },
  {
    id: 6,
    title: "АРИТМОЛОГИЯ",
    img: Product6,
  },
];

export default function Products() {
  return (
    <>
      <div className="py-10 px-5">
        <h2 className="text-2xl text-center py-10">ПРОДУКЦИЯ</h2>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center">
          {products.map((item: any) => (
            <ProductsCard data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center p-10">
        <Link
          href={"/"}
          className="flex items-center gap-3 text-[#0D4C93] text-xl max-lg:text-sm max-lg:gap-1"
        >
          Перейти в каталог нашей продукции <Image src={ArrowR} alt="image" />
        </Link>
      </div>
    </>
  );
}
