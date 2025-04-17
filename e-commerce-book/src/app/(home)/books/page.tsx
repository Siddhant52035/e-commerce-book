"use client";
import PageHeader from "@/components/PageHeader";
import BookCard from "@/components/BookCard";
import { ChevronDown, ChevronRight, LayoutGrid, List } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { Grid } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  {
    label: "Necklaces",
    path: "/destination",
    subMenu: [
      { label: "Gold Necklace", path: "/product" },
      { label: "Silver Necklace", path: "/product" },
    ],
  },
  {
    label: "Bracelets",
    path: "/faqs",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  {
    label: "Rings",
    path: "/gallery",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  {
    label: "Earrings",
    path: "/scholarship-list",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  { label: "Bangles", path: "/testimonials" },
  { label: "Pendants", path: "/visa-acceptance" },
  { label: "Chains", path: "/studentcounselling" },
  { label: "Anklets", path: "/scholarship-assistance" },
  { label: "Nose Pins", path: "/message-from-ceo" },
  { label: "Cufflinks", path: "/holiday-list" },
  { label: "Jewelry Sets", path: "/about" },
  { label: "Gold Coin & Bullion", path: "/blogs" },
];

export default function Product() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleSubMenu = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <main className="w-full">
      <PageHeader title="Books" />

      <section className="pt-10 bg-[#F5F5F5] px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Content Section (Sidebar + Products) */}
        <div className="container flex flex-col md:flex-row gap-4">
          {/* Sidebar (Categories) */}
          <aside className="w-full md:w-1/4">
            <div className="mb-2 bg-white p-4 rounded-sm shadow-lg">
              <div className="flex items-center gap-4">
                <LayoutGrid color="#9f0038" size={35} />
                <span className="font-semibold text-xl md:text-2xl">
                  Categories
                </span>
              </div>
              <hr className="mt-3 mb-1 border-2 border-secondary" />
              <ul>
                {categories.map((item, index) => (
                  <li key={index} className="w-full">
                    <div
                      onClick={() => toggleSubMenu(item.label)}
                      className="cursor-pointer flex items-center justify-between p-2 hover:bg-quinary text-black hover:text-white rounded-sm"
                    >
                      <Link href={item.path} className="font-semibold">
                        {item.label}
                      </Link>
                      {item.subMenu &&
                        (openCategory === item.label ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        ))}
                    </div>
                    {openCategory === item.label && item.subMenu && (
                      <ul className="pl-6 transition-all list-disc duration-300">
                        {item.subMenu.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            className="p-1 text-black font-semibold hover:text-white hover:bg-[#ef001f] rounded-sm"
                          >
                            <Link href={sub.path}>{sub.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Display */}
          <div className="w-full md:w-3/4 mb-10 h-full">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* {products.map(({ image, product, price, desc, id }) => ( */}
              {/* <BookCard
                  key={id}
                  image={image.src}
                  product={product}
                  price={price}
                  desc={desc}
                  id={id}
                  
                /> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
