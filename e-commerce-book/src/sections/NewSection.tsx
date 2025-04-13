import SectionHeader from "../components/SectionHeader";

import abc1 from "@/assets/images/ni1.jpg";
import abc2 from "@/assets/images/ni2.jpg";
import abc3 from "@/assets/images/ni3.jpg";
import abc4 from "@/assets/images/ni4.jpg";
import abc5 from "@/assets/images/ni5.jpg";
import abc6 from "@/assets/images/ni6.jpg";
import Link from "next/link";

const services = [
  {
    image: abc4,
    title: "Tailored Solutions",
    href: "/business-consulting",
    text: "Customised strategies designed to meet the specific needs of businesses, communities, and individuals.",
  },
  {
    image: abc5,
    title: "Holistic Expertise",
    href: "/career-consulting",
    text: "Specialised consulting across Business, Community, and Career sectors for well-rounded impact.",
  },
  {
    image: abc6,
    title: "Experienced Team",
    href: "/community-consulting",
    text: " A diverse group of consultants, advisors, and coaches with proven industry experience.",
  },
  {
    image: abc1,
    title: "Social Impact Focus",
    href: "/business-consulting",
    text: " Dedicated to creating positive change alongside business and personal success.",
  },
  {
    image: abc2,
    title: "Results-Driven Approach",
    href: "/career-consulting",
    text: " Focused on measurable outcomes, sustainable growth, and long-term success.",
  },
  {
    image: abc3,
    title: "Flexible Engagement Options",
    href: "/community-consulting",
    text: " Offering consultations, project support, and ongoing partnerships tailored to client needs.",
  },
];

export default function NewSection() {
  return (
    <section className="w-full flex_center flex-col mx-auto font-jakarta py-10 lg:px-0 px-6 lg:gap-12 gap-6">
      <SectionHeader
        title="Driving Meaningful and Measurable Impact"
        smallTitle="Our Core Objectives"
      />
      <div className="w-full grid lg:grid-cols-6 grid-cols-1">
        {services.map((service, index) => {
          return (
            <Link href={service.href} key={index}>
              <div
                className="group relative flex flex-col col-span-1 hover:shadow-2xl duration-500 max-w-full h-[500px] overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay ONLY on image */}
                <div className="absolute inset-0 bg-black/50 z-0" />

                {/* Content wrapper above overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10  transition-all duration-500">
                  {/* Title */}
                  <h1 className="text-white text-xl md:text-3xl [text-shadow:_2px_2px_0px_rgba(0,0,0,0.3)] drop-shadow-md font-semibold text-left transition-all duration-1000 group-hover:-translate-y-6">
                    {service.title}
                  </h1>

                  {/* Text (initially hidden) */}
                  <h4 className="text-white opacity-0 max-h-0 overflow-hidden transition-all duration-1000 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0 translate-y-4">
                    {service.text}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
