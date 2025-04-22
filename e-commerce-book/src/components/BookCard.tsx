import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "@/store/useCartStore";
import bookImage from "@/assets/images/book1.png";
import { MessageCircle } from "lucide-react";

const BookCard = ({ name, pdf, desc, id }: any) => {
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  const { items: cart, addToCart } = useCartStore();

  const handleAddToCart = () => {
    const productToAdd = { name, pdf, desc, id };
    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      toast.info("Note already exists!!");
    } else {
      addToCart(productToAdd);
      toast.success("Note saved to WishList");
    }
  };

  return (
    <div className="bg-[#f9fafb] rounded-2xl shadow-lg p-5 transition hover:shadow-2xl group">
      <Link href={`/product/${formatSlug(name)}`}>
        <div className="cursor-pointer flex justify-center mb-4">
          <Image
            src={bookImage}
            alt={name}
            width={200}
            height={200}
            className="rounded-xl w-48 h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="text-left mb-4">
        <h2 className="text-xl font-semibold  text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Save to WishList
        </button>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          View PDF
        </a>
      </div>

      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-1 text-gray-500 cursor-pointer hover:text-gray-700 transition">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Comment</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
