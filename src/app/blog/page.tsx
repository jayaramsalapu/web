import BlogClient from "./BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scientific Home Care Journal | TM Solutions",
  description: "Explore professional insights, detailed product science breakdowns, eco-refill calculations, and fabric care techniques from TM Solutions science lab.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
