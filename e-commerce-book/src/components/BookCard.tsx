import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "@/store/useCartStore";

const BookCard = ({ name, image, price, desc, id }: any) => {
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  const { items: cart, addToCart } = useCartStore();

  const handleAddToCart = () => {
    const productToAdd = { image, name, price, desc, id };

    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      toast.info("Product already exists!!");
    } else {
      addToCart(productToAdd);
      toast.success("Product added to Cart");
    }
  };

  return (
    <div className="bg-white p-4 rounded-sm shadow-lg group">
      <Link href={`/product/${formatSlug(name)}`}>
        <div className="cursor-pointer flex justify-center group-hover:scale-105 transition-transform">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-48 h-40 object-cover rounded-lg"
          />
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h2 className="font-medium text-lg text-black">{name}</h2>
        <p className="text-xl font-bold text-black mt-2"> £. {price}</p>
        <p className="text-sm text-black mt-2">{desc}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="text-semibold text-ascent-1 px-4 py-2 border-2 border-[#dda303] rounded-lg hover:bg-[#ef001f] hover:text-white transition"
        >
          Add to Cart
        </button>
        <Link href={`/product/${formatSlug(name)}`} passHref>
          <button className="text-semibold text-ascent-1 px-4 py-2 border-2 border-[#dda303] rounded-lg hover:bg-[#ef001f] hover:text-white transition">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
