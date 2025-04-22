"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bell } from "lucide-react";
import profileImage from "@/assets/images/ig1.png";
import useUserStore from "@/store/useUserStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { apiRequest } from "@/utils";
import BookCard from "@/components/BookCard";

interface BookData {
  title: string;
  author?: string;
  description?: string;
  pdf: string; // URL to PDF
  [key: string]: any;
}

export default function UserProfile() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(true);

  const id = user?.id;

  const handleLogout = () => {
    logout();
    toast.error("You Have Been Logged Out!");
  };
  const handleDeleteAccount = async () => {
    try {
      await axios
        .delete(`http://localhost:8800/user/delete-user/${id}`)
        .then((res) => console.log(res));
      toast.success("Account deleted");
      logout(); 
    } catch (error) {
      toast.error("Failed to delete account");
    }
  };

  useEffect(() => {
    const fetchUserNotes = async () => {
      if (!user?.id) return;

      const res = await apiRequest({
        url: `/note/user-upload?id=${user.id}`,
        method: "GET",
        data: {}, // send empty for GET
      });

      console.log(res);
      setBooks(res);
    };

    fetchUserNotes();
  }, []);
  return (
    <div className="min-h-screen w-full bg-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-2 border-secondary shadow-xl p-4">
        <div className="flex items-center gap-4">
          <Image
            src={profileImage} // Replace with actual profile picture path
            alt="User Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">
              Welcome, {user?.firstName || "User"}
            </h2>
            <p className="text-sm text-gray-500">Tue, 07 June 2022</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full">
            <Bell fill="secondary" className="h-5 w-5" />
          </button>
          <button className="text-semibold text-ascent-1 px-2 py-2 bg-secondary rounded-lg text-white transition">
            UPLOAD PHOTO
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <div className="mt-6 border p-6 flex flex-col gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Image
            src={profileImage} // Replace with actual image path
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className=" grid grid-cols-2  gap-10">
          <div className="w-[80%]">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              value={user?.firstName}
              readOnly
              className="w-full mt-1 p-2 border rounded-md outline-none bg-gray-100 text-gray-500"
            />
          </div>
          <div className="w-[80%]">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={user?.lastName}
              readOnly
              className="w-full mt-1 p-2 border rounded-md outline-none bg-gray-100 text-gray-500"
            />
          </div>

          <div className="w-[80%]">
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="w-full mt-1 p-2 border rounded-md outline-none bg-gray-100 text-gray-500"
            />
          </div>
          <div className="w-[80%]">
            <label className="text-sm font-medium">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              // onChange={handleImageChange} // you'll define this
              className="w-full mt-1 p-2 border rounded-md outline-none bg-gray-100 text-gray-500 "
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="text-semibold text-ascent-1 px-8 py-2 bg-secondary rounded-lg text-white transition">
            Update Details
          </button>
          <button className="text-bold text-ascent-1 px-8 py-2 bg-secondary rounded-lg text-white transition">
            Change Password
          </button>
          <button
            onClick={handleLogout}
            className="text-bold text-ascent-1 px-8 py-2 bg-quinary rounded-lg text-white transition"
          >
            LogOut
          </button>
          <button
            onClick={handleDeleteAccount}
            className="text-bold text-ascent-1 px-8 py-2 bg-quinary rounded-lg text-white transition"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* My Uploads */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-md font-semibold">MY UPLOADS</h3>
        <div className="w-full  mb-10 h-full">
          {/* {loading ? (
              <p className="text-center">Loading books...</p>
            ) : ( */}
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
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
