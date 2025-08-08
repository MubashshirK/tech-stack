"use client";
import { productType } from "@/constants/data";
import Link from "next/link";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* Scrollable tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`whitespace-nowrap border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
              selectedTab === item?.title
                ? "bg-shop_light_green text-white border-shop_light_green"
                : "bg-shop_light_green/10"
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      {/* See all button */}
      <Link
        href={"/shop"}
        className="border border-darkColor px-4 py-1 rounded-full hover:bg-shop_light_green hover:text-white hover:border-shop_light_green hoverEffect flex-shrink-0"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabbar;
