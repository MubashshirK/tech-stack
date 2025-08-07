import React from "react";
import { Category } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="bg-white border border-shop_light_green/30 my-10 md:my-20 p-6 lg:p-8 rounded-xl shadow-sm">
      {/* Title Section */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
        <div className="w-1.5 h-6 bg-shop_dark_green rounded-full" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Popular Categories
        </h2>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <Link
            key={category?._id}
            href={{
              pathname: "/shop",
              query: { category: category?.slug?.current },
            }}
            className="group flex items-center gap-4 bg-shop_light_bg rounded-lg p-4 border border-transparent hover:border-shop_orange transition-all duration-200 hover:shadow-md hover:bg-white"
          >
            {category?.image && (
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden border border-shop_orange/30 rounded-md p-1 transition-all group-hover:border-shop_orange">
                <Image
                  src={urlFor(category?.image).url()}
                  alt={category?.title || "Category Image"}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-gray-800 group-hover:text-shop_dark_green transition-colors">
                {category?.title}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="inline-block text-xs font-semibold text-white bg-shop_dark_green px-2 py-0.5 rounded-full">
                  {category?.productCount} items
                </span>{" "}
                Available
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
