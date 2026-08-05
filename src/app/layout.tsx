import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/organisms/layout/Navbar";
import "./globals.css";
import Footer from "@/components/organisms/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bookshop",
    template: "%s | Bookshop",
  },
  description: "Discover and shop your favorite books online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
