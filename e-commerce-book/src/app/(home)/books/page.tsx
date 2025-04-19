"use client";
import PageHeader from "@/components/PageHeader";
import { ChevronDown, ChevronRight, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import BookCard from "@/components/BookCard";

// Book interface
interface BookData {
  title: string;
  author?: string;
  description?: string;
  pdf: string; // URL to PDF
  [key: string]: any;
}

// Sample categories
const categories = [
  {
    label: "Notes",
    path: "/notes",
    subMenu: [
      { label: "Science Notes", path: "/notes/science" },
      { label: "Math Notes", path: "/notes/math" },
      { label: "History Notes", path: "/notes/history" },
    ],
  },
  {
    label: "Books",
    path: "/books",
    subMenu: [
      { label: "Fiction", path: "/books/fiction" },
      { label: "Non-fiction", path: "/books/non-fiction" },
      { label: "Biographies", path: "/books/biographies" },
      { label: "Academic", path: "/books/academic" },
      { label: "Self-help", path: "/books/self-help" },
    ],
  },
  {
    label: "Others",
    path: "/others",
    subMenu: [
      { label: "Magazines", path: "/others/magazines" },
      { label: "Journals", path: "/others/journals" },
    ],
  },
  {
    label: "Library Info",
    path: "/library-info",
  },
];

export default function Product() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleSubMenu = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/note/fetch-notes"
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
    console.log("These are the book", books);
  }, []);

  return (
    <main className="w-full">
      <PageHeader title="Books" />

      <section className="pt-10 bg-[#F5F5F5] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="container flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
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

          {/* Book Display */}
          <div className="w-full md:w-3/4 mb-10 h-full">
            {loading ? (
              <p className="text-center">Loading books...</p>
            ) : (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                  <BookCard
                    name={book.name}
                    pdf={book.pdf}
                    desc={book.desc}
                    id={book.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
