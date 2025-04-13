import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import pageHeaderImage from "@/assets/images/pageHeaderImage.jpeg";

export default function PageHeader({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div
      style={{
        background:
        "linear-gradient(135deg, #173f5f 0%, #2b5876 40%, #1c1c1c 100%)",
      }}
      className="w-full h-64 flex_center flex-col text-primary relative"
    >
        {/* <Image
        src={pageHeaderImage}
        alt="page header image"
        className="w-full h-full object-cover"
      /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary"></div> */}
      <div className="flex_center flex-col gap-8 absolute">
        <h1 className="md:text-[40px] text-3xl text-center font-semibold">{title}</h1>
        <div className="flex_center gap-3 md:py-3 py-2 px-3 md:px-6 border border-primary rounded-md text-base">
          <Link href={"/"} className="flex_center gap-1 md:gap-3">
            <BiHome />
            <p>Home</p>
          </Link>
          <div className="text-base">
            <IoIosArrowForward />
          </div>
          <Link href={link} className="flex_center text-center gap-3">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
