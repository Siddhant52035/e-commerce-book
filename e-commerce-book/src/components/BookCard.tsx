import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "@/store/useCartStore";
import bookImage from "@/assets/images/book1.png";

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
    <div className="bg-white p-4 rounded-sm shadow-lg group">
      <Link href={`/product/${formatSlug(name)}`}>
        <div className="cursor-pointer flex justify-center group-hover:scale-105 transition-transform">
          <Image
            src={bookImage}
            alt={name}
            width={200}
            height={200}
            className="w-48 h-40 object-cover rounded-lg"
          />
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h2 className="font-medium text-lg text-black">{name}</h2>

        <p className="text-sm text-black mt-2">{desc}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="text-semibold text-ascent-1 px-2 py-2 bg-secondary rounded-lg text-white transition"
        >
          Save to WishList
        </button>
        {/* <Link href={`/product/${formatSlug(name)}`} passHref>
          <button className="text-semibold text-ascent-1 px-4 py-2 border-2 border-[#dda303] rounded-lg hover:bg-[#ef001f] hover:text-white transition">
            Buy Now
          </button>
        </Link> */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-semibold text-ascent-1 px-4 py-2  bg-secondary rounded-lg text-white transition"
        >
          View PDF
        </a>
      </div>
    </div>
  );
};

export default BookCard;
