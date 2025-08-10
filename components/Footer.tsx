import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10">
      <Container>
        {/* Top Section (Contact Info) */}
        <FooterTop />

        {/* Main Footer Content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo />
            <SubText className="text-gray-600">
              Tech Stack delivers handpicked tech products to simplify and elevate your digital lifestyle.
            </SubText>
            <SocialMedia
              className="text-darkColor/70"
              iconClassName="border-darkColor/50 hover:border-shop_light_green hover:text-shop_light_green transition-colors"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* Quick Links */}
          <div>
            <SubTitle className="text-gray-900">Quick Links</SubTitle>
            <ul className="space-y-3 mt-5">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-shop_light_green font-medium transition-colors"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <SubTitle className="text-gray-900">Categories</SubTitle>
            <ul className="space-y-3 mt-5">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="text-gray-600 hover:text-shop_light_green font-medium transition-colors"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <SubTitle className="text-gray-900">Newsletter</SubTitle>
            <SubText className="text-gray-600">
              Subscribe to our newsletter to receive updates and exclusive offers
            </SubText>
            <form className="space-y-3">
              <Input
                placeholder="Enter your email"
                type="email"
                required
                className="rounded-md border-gray-300 focus:ring-shop_light_green focus:border-shop_light_green"
              />
              <Button className="w-full rounded-md">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
            <span>
              © {new Date().getFullYear()} <Logo className="inline text-sm" />.
            </span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
