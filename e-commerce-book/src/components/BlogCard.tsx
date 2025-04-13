import { StaticImageData } from "next/image";
import Link from "next/link";

export default function BlogCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  const formatSlug = (name: string): string => {
    return name.split(":")[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="relative max-w-full h-[500px] min-h-[400px] rounded-sm cursor-pointer overflow-hidden shadow-md group">
      {/* Background image container with scale */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 z-0"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      ></div>
      <Link
        href={`/blogs/${formatSlug(title)}`}
        className="text-secondary cursor-pointer"
      >
        {/* Overlay & text content */}
        <div className="relative z-10 bg-black/40 hover:bg-black/10 transition-all duration-5000 h-full w-full p-4 flex flex-col justify-end">
          <h2 className="text-xl md:text-3xl text-white line-clamp-2 font-[600]">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
