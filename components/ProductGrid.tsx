"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import { Loader2 } from "lucide-react";
import Container from "./Container";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants/data";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const query = `*[_type == "product" && variant == $variant] | order(name asc){
    ...,"categories": categories[]->title
  }`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.error("Product fetching Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <Container className="flex flex-col my-14 space-y-8">
      {/* Tab Selector */}
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {/* Loading State */}
      {loading ? (
        <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm py-16 w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-shop_dark_green">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="font-medium text-sm">Loading products...</span>
          </motion.div>
        </div>
      ) : products?.length ? (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-gray-200 bg-white hover:shadow-md transition-transform duration-200 hover:scale-[1.015]"
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;
