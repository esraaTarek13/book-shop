import type { Metadata } from "next";
import AboutTemplate from "@/components/templates/AboutTemplate";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Bookshop and our mission to bring great books to every reader.",
};

export default function AboutPage() {
  return <AboutTemplate />;
}
