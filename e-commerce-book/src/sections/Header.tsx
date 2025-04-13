"use client";

import { Heart, MessageSquare, User, Search } from "lucide-react";
import logo from "@/assets/logo/Sikshya.png";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <header className="header z-50  top-0 sticky flex flex-col w-full border-b">
      <div className="header-bottom w-full lg:flex hidden xl:px-0 container px-4 justify-between items-center   ">
        <nav className="w-full flex items-center justify-between p-4 bg-white">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#1b2d43] text-white px-4 py-2 rounded-full border-2 border-blue-500 flex items-center gap-1">
              <Image src={logo} alt="Sikshya Logo" width={40} height={40} />
              <span className="text-lg font-bold">Sikshya</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="flex items-center bg-[#F5F5F5] rounded-full border px-4 py-2 max-w-2xl w-full transition-all focus-within:border-2 focus-within:border-[#173f5f]">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent flex-1 outline-none text-sm placeholder:text-gray-400"
              />
              <Search size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-6 text-sm font-medium text-black uppercase">
            <div className="flex items-center gap-1 cursor-pointer">
              <Heart size={16} />
              <span>Wishlist</span>
            </div>
            <div className="h-7 w-[1.5px] bg-gray-300" />
            <div className="flex items-center gap-1 cursor-pointer">
              <MessageSquare size={16} />
              <span>Message</span>
            </div>
            <div className="h-7 w-[1.5px] bg-gray-300" />
            {isLoggedIn ? (
              <div className="flex items-center gap-1 cursor-pointer">
                <User size={16} />
                <span>Account</span>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <span className="bg-secondary rounded-full text-white px-4 py-2">
                    Login
                  </span>
                </Link>{" "}
                <Link
                  href="/signup"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <span className="bg-secondary rounded-full text-white px-4 py-2">
                    Sign Up
                  </span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      <div className="w-full py-3 text-primary  bg-secondary">
        <div className="container lg:flex hidden justify-center gap-10 items-center">
          <div className="flex gap-10 font-normal text-lg">
            <Link href="/">Home</Link>
            <div className="h-7 w-[1.5px] bg-gray-300"></div>
          </div>

          <div className="flex gap-10 font-normal text-lg">
            <Link href="/about">About Us</Link>
            <div className="h-7 w-[1.5px] bg-gray-300"></div>
          </div>

          <div className="flex gap-10 font-normal text-lg">
            <Link href="/">Books</Link>
            <div className="h-7 w-[1.5px] bg-gray-300"></div>
          </div>

          <div className="flex gap-10 font-normal text-lg">
            <Link href="/">New Release</Link>
            <div className="h-7 w-[1.5px] bg-gray-300"></div>
          </div>
          <div className="flex gap-10 font-normal text-lg">
            <Link href="/blogs">Blog</Link>
            <div className="h-7 w-[1.5px] bg-gray-300"></div>
          </div>

          <div className="flex gap-10 font-normal text-lg">
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
