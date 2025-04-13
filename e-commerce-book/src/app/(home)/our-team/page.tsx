"use client";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import placeholderImage from "@/assets/images/team.jpeg";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ceoimage1 from "@/assets/images/ig1.png";
import ceoimage2 from "@/assets/images/ig2.png";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import CTA from "@/components/CTA";

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

export default function OurTeam() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/our-team" title="Meet The Team" />
      {/* <section className="w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12"> */}
      {/* <SectionHeader
          // smallTitle="Our Team"
          title="Our Team"
          className="lg:w-[60%] w-full text-tertiary text-center"
        /> */}
      {/* <div className="flex_center flex-col gap-4 w-full">
          <Image
            src={placeholderImage}
            alt="placeholder-image"
            className="w-full h-[60vh] object-cover"
          />
          <div className="flex_center lg:flex-row flex-col gap-8 w-full text-text">
            <p className="w-full text-justify md:text-center">
              At AI Global, our strength lies in the talent, expertise, and
              dedication of our diverse and dynamic team. Each member brings a
              unique set of skills and experiences, working collaboratively to
              deliver innovative solutions that meet the needs of our clients.
              We pride ourselves on fostering a supportive and inclusive
              environment where creativity thrives, and excellence is the
              standard.
            </p>
          </div>
        </div> */}
      {/* </section> */}
      <section className="w-full flex_center flex-col lg:px-0 container px-5 py-16 gap-12 relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 relative">
          {[
            { name: "Mr. James Bennett", position: "CEO", image: ceoimage1 },

            {
              name: "Ms. Clara Robinson",
              position: "Administrative Officer/Manager",
              image: ceoimage2,
            },
            {
              name: "Mr. Daniel Kim",
              position: "Administrative Officer/Sales (Philippines)",
              image: ceoimage1,
            },
            {
              name: "Mr. Lucas Moreno",
              position: "Marketing Head - Nepal",
              image: ceoimage2,
            },
            {
              name: "Mr. Orisi Moala",
              position: "CEO (Fiji)",
              image: ceoimage1,
            },
            {
              name: "Ms. Emily Chen",
              position: "Administration/Documentation",
              image: ceoimage2,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="profilecard flex_center relative col-span-1 group hover:shadow-lg rounded-md overflow-hidden"
            >
              <Image
                src={
                  member.image
                    ? member.image
                    : "https://dummyimage.com/400x500/12afcb/43bed1"
                }
                alt="profile image"
                width={400}
                height={500}
                className="w-full h-[400px] md:h-[480px] object-cover object-top "
              />
              <div className="absolute bottom-0 w-full p-4 bg-secondary/60 md:bg-transparent md:group-hover:bg-secondary/60 transition-all md:translate-y-full md:group-hover:translate-y-0 duration-300">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg md:text-2xl font-semibold text-primary">
                      {member.name}
                    </h4>
                    <p className="text-primary md:text-sm text-xs">
                      {member.position}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowMessage(true)}
                    className="md:size-9 size-8 bg-primary rounded-full p-2"
                  >
                    <FaPlus className="md:size-full text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showMessage && (
        <div className="absolute inset-0 bg-black/80 flex_center lg:px-24 px-4">
          <div className="flex lg:flex-row flex-col gap-6 p-8 lg:w-[65%] w-full lg:h-[485px] bg-primary rounded-md relative -bottom-16">
            <div className="image lg:w-[40%] w-full lg:h-full flex flex-col gap-4">
              <div className="flex_center w-full lg:h-[70%] h-[300px] overflow-hidden">
                <Image
                  src="https://dummyimage.com/400x500/12afcb/43bed1"
                  alt="profile-image"
                  width={400}
                  height={500}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex_center flex-col gap-2">
                <h4 className="text-2xl font-semibold text-secondary">
                  Mr. Santosh BC
                </h4>
                <p className="text-text">Admission/Documentation</p>
              </div>
              <div className="flex_center gap-3">
                {socialMedia.map((media, index) => (
                  <a
                    key={index}
                    href={media.link}
                    target="_blank"
                    className="social rounded-full size-8 p-2 border border-text/30 text-secondary"
                  >
                    <media.icon className="size-full" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-[60%] w-full">
              <p className="text-text">
                The CEO/Chairperson plays a pivotal role in steering the
                organization towards success and sustainability...
              </p>
            </div>
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-5 right-5 text-secondary size-5"
            >
              <RxCross2 className="size-full" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
