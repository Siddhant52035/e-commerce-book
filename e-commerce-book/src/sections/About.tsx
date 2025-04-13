import contactImage from "@/assets/images/contact1.jpg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Link as LinkIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import visa1 from "@/assets/images/about1.jpg";
import visa3 from "@/assets/images/about2.jpg";
import visa2 from "@/assets/images/about3.jpg";
import visa4 from "@/assets/images/about4.jpg";
import visa5 from "@/assets/images/about5.jpg";

export const stats = [
  { value: "20+ Countries", label: "Client Reach" },
  { value: "20+ Years", label: "Team Experience" },
  { value: "20+ Experts", label: "In-House & Partner Consultants" },
  { value: "98%", label: "Client Repeat Rate" },
];

export const cards = [
  {
    title: "Empowering Change Across Sectors",
    text: "Tailored Solutions for Business, Community & Career Growth Kandelco delivers innovative consulting services that drive business success, strengthen communities, and support individual career journeys across Australia.",
    image: visa1,
  },
  {
    title: "Purpose-Driven from the Start",
    text: "A Story Built on Shared Vision and Real-World Impact Founded by experienced professionals, Kandelco was born from the belief that sustainable progress happens when businesses, communities, and individuals grow together.",
    image: visa3,
  },
  {
    title: "Mission & Vision That Guide Everything We Do",
    text: "Empowering Action, Creating Measurable Outcomes With a clear mission and bold vision, we focus on delivering consulting solutions that create lasting, meaningful change.",
    image: visa2,
  },
  {
    title: "A Trusted and Evolving Partner",
    text: "From Local Projects to National Impact Our journey from grassroots initiatives to major collaborations with corporations and governments reflects our growth and ongoing commitment to making a difference.",
    image: visa4,
  },
  {
    title: " The People Behind the Impact",
    text: "Expert Consultants, Coaches & Changemakers Our multidisciplinary team brings deep expertise and a passion for empowerment, ensuring every client receives a holistic, results-driven approach.",
    image: visa5,
  },
];
export default function About() {
  return (
    <>
      <section className=" font-jakarta  gap-8 w-full xl:px-24 lg:px-10 py-10 px-5 bg-[#F5FBFF]">
        <h1 className="md:text-[2.9rem] mb-10 text-xl w-full text-center  font-normal">
          Empowering Growth Through Strategic Consulting
        </h1>
        <div className="flex_center lg:flex-row flex-col gap-10 container w-full rounded-md">
          <div className="lg:w-[45%] w-[90%] flex_center flex-col  overflow-hidden">
            <Image
              src={contactImage}
              alt="contact-image"
              className="w-full max-h-[800px] object-cover"
            />
          </div>
          <div className="lg:w-[55%] w-[90%] flex_center flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col text-justify text-tertiary gap-3">
                <h4>
                  Kandelco Consulting was founded by a team of experienced
                  professionals with diverse backgrounds in business, community
                  development, and career coaching. The company’s vision emerged
                  from a shared understanding that success in today’s world is
                  not only about individual achievements but also about
                  collective progress. We realised that businesses need robust
                  strategies to grow, communities require sustainable programs
                  to thrive, and individuals need support to navigate their
                  careers. This sparked the idea of a consulting firm that would
                  offer innovative and practical solutions across these three
                  vital areas—business, community, and career development.
                </h4>
                <h4>
                  Kandelco began with a simple yet powerful mission: to empower
                  businesses, uplift communities, and guide individuals on their
                  professional journeys. Over the years, we’ve grown into a
                  trusted partner for organisations and individuals across
                  Australia, helping them tackle challenges, explore new
                  opportunities, and achieve their goals.
                </h4>
              </div>
              <h1 className="md:text-3xl text-xl text-justify font-normal">
                Kandelco Consulting empowers businesses, communities, and
                individuals with tailored strategies for sustainable growth.
                Founded by experienced professionals, it has become a trusted
                national leader in delivering impactful solutions.
              </h1>
              <h1 className="md:text-3xl text-xl  font-normal">
                The Evolution
              </h1>
              <div className="flex flex-col text-justify text-tertiary gap-3">
                <h4>
                  Starting with small businesses and local communities, our
                  impact soon spread to larger corporations and government
                  agencies. We’ve managed to successfully combine our deep
                  knowledge of business operations with a passion for social
                  responsibility and personal empowerment. This unique
                  combination has enabled us to offer consulting services that
                  not only drive profitability but also foster positive social
                  change.
                </h4>
                <h4>
                  Through continuous growth, we’ve expanded our team to include
                  top consultants, project managers, policy advisors, career
                  coaches, and other experts. Each member of our team brings
                  valuable experience and expertise in their field, ensuring we
                  can offer holistic solutions to our clients. Today, Kandelco
                  is a dynamic consulting firm that focuses on results, building
                  long-term relationships, and delivering actionable strategies
                  that make a real difference.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container md:mt-20 mt-10  grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-4xl font-bold text-[#00BFFF]">
                {stat.value}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-700 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-tertiary text-white py-16 px-4 md:px-12">
        <div className="container">
          {/* Section Heading */}
          <div className="mb-12 ">
            <p className="uppercase text-sm text-[#96c4e3] mb-2">
              / How we work
            </p>
            <h2 className="text-xl md:text-3xl text-center font-normal">
              At Kandelco Consulting, we collaborate closely with clients to
              understand their unique needs and create tailored, impactful
              strategies. Our approach is built on transparency, innovation, and
              long-term success, ensuring practical and sustainable solutions
              that drive meaningful results.
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {cards.slice(0, 2).map((card, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-md shadow-md overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-80 object-cover "
                />
                <div className="px-6 pb-6">
                  <h3 className="font-normal text-xl md:text-3xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-700">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.slice(2, 5).map((card, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-md shadow-md overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="px-6 pb-6">
                  <h3 className="font-normal text-lg md:text-2xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-700">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
