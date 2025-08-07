import React from "react";
import Title from "./Title";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={42} />,
  },
  {
    title: "Free Return",
    description: "Return within 7 days",
    icon: <GitCompareArrows size={42} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 24/7 customer help",
    icon: <Headset size={42} />,
  },
  {
    title: "Money Back Guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={42} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <section className="mb-14 lg:mb-24 bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-shop_dark_green rounded-sm" />
          <Title className="text-xl sm:text-2xl font-bold text-gray-800">
            Shop By Brands
          </Title>
        </div>
        <Link
          href="/shop"
          className="text-sm font-medium text-gray-600 hover:text-shop_btn_dark_green transition"
        >
          View all
        </Link>
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
            className="group bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-shop_light_green transition duration-200 flex items-center justify-center"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand.image).url()}
                alt={brand?.title || "Brand"}
                width={250}
                height={250}
                className="w-24 h-16 object-contain group-hover:scale-105 transition-transform"
              />
            )}
          </Link>
        ))}
      </div>
      {/* Extra Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {extraData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition group border border-gray-100"
          >
            <div className="text-shop_dark_green group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-gray-800 font-semibold capitalize">
                {item.title}
              </p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByBrands;
