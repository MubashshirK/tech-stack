import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: "Tech Stack",
    template: "%s | Tech Stack",
  },
  description: "A heaven shop for tech lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
    </ClerkProvider>
  );
}
