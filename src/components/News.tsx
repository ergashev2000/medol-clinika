import CustomSwiper from "@/components/CustomSwiper";

export default function News() {
  return (
    <div className="pt-16">
      <h2 className="text-2xl font-semibold text-center py-10">НОВОСТИ</h2>
      <div className="px-5">
        <CustomSwiper />
      </div>
    </div>
  );
}
