import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero/Hero_landing";
import PopularKits from "@/components/popularKits/PopularKits";
import CategorySection from "@/components/categorySection/CategorySection";
import FeaturedEquipmentSection from "@/components/featuredEquipment/FeaturedEquipment";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularKits />
      <CategorySection />
      <FeaturedEquipmentSection />
      <div className="text-center text-xl font-bold my-4"></div>

      <div className="flex flex-col items-center">
        <Link href="/pages/products">
          <button className="bg-lime text-black p-2 rounded-lg">
            Click Me
          </button>
        </Link>
      </div>
    </>
  );
}
