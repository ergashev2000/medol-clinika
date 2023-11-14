import Image from "next/image"
import Button from "./ui/Button";

export default function ProductsCard({data}: any) {
    
  return (
    <div
      className="max-w-xs w-full flex gap-5 items-center flex-col px-5 py-10 rounded-3xl hover:shadow-lg transition-all duration-500 cursor-pointer hover:[&>img]:scale-110"
      style={{
        background:
          "linear-gradient(180deg, rgba(248,248,248,1) 63%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Image src={data.img} alt="Image" className="h-32 object-contain transition-all duration-500" />
      <h3>{data.title}</h3>
      <Button>Посмотреть все</Button>
    </div>
  );
}
