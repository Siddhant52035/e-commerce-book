import SectionHeader from "../components/SectionHeader";
import serviceFirst from "@/assets/images/business-consulting.jpg";
import serviceSecond from "@/assets/images/career-consulting.jpg";
import serviceThird from "@/assets/images/community-consulting.jpg";
import serviceFourth from "@/assets/images/digital-consulting.jpg";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: serviceFirst,
    title: "Business Consulting",
    href: "/business-consulting",
  },
  {
    image: serviceSecond,
    title: "Career Consulting",
    href: "/career-consulting",
  },
  {
    image: serviceThird,
    title: "Community Consulting",
    href: "/community-consulting",
  },
  {
    image: serviceFourth,
    title: "Digital Consulting",
    href: "/business-consulting",
  },
  
];

export default function Services() {
  return (
    <section className="w-full flex_center flex-col container lg:gap-12 gap-6 px-6 py-10 font-jakarta">
      <SectionHeader
        title="Strategic Services for Business, Community & Career"
        smallTitle="Our Services"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-5  grid-cols-1 w-full">
        {services.map((service, index) => {
          return (
            <Link href={service.href} key={index}>
              <div
                className="flex flex-col col-span-1 relative hover:shadow-2xl hover:scale-105 duration-500 gap-8 max-w-full min-w-[260px] h-[450px] min-h-[400px] rounded-md p-8 bg-[#F5FBFF]"
                style={{
                  backgroundImage: `url(${service.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-xl md:text-3xl text-primary [text-shadow:_2px_2px_0px_rgba(0,0,0,0.3)] absolute bottom-4 drop-shadow-md font-semibold text-center">
                    {service.title}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
