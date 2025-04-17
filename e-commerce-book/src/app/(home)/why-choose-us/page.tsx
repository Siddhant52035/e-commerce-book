import Image from "next/image";
import aboutSecondImage from "@/assets/images/aboutImageFull.jpg";
import SectionHeader from "@/components/SectionHeader";
import PageHeader from "@/components/PageHeader";

export default function WhyChooseUs() {
  return (
    <>
      <PageHeader title="Why Choose Us" />
      <section className="w-full flex_center flex-col lg:gap-12  gap-6 lg:px-24 px-4 lg:py-16 py-10 bg-[#F5FBFF]">
       
        <div className="container">
          <h1 className="text-tertiary text-xl md:text-3xl font-bold mb-4">
            A Track Record of Proven Success
          </h1>
          <p className="text-text text-justify w-full">
            At Kandelco Consulting, we pride ourselves on delivering results.
            We’ve worked with hundreds of clients across various industries, and
            our expertise spans a diverse range of sectors—from small local
            businesses to large corporations, as well as government bodies and
            non-profit organisations. The success stories we have created, and
            the measurable impact we’ve had, speak volumes about the value we
            bring.
          </p>
          <ul className="list-disc">
            <li className="mb-2 ml-4 text-black mt-4">
              <span className="font-semibold">Business Growth:</span> Helping
              businesses achieve measurable growth, streamline operations, and
              improve their bottom line.
            </li>
            <li className="mb-2 ml-4 text-black">
              <span className="font-semibold">Social Impact:</span> Creating
              community initiatives that lead to tangible social change,
              increased engagement, and long-term sustainability.
            </li>
            <li className="mb-2 ml-4 text-black">
              <span className="font-semibold">Career Success:</span> Empowering
              individuals to take control of their career paths with expert
              coaching, job placement services, and skill development programs.
            </li>
          </ul>
        </div>
        <div className="container">
          <h1 className="text-tertiary text-xl md:text-3xl font-bold mb-4">
            Expertise in Three Core Areas
          </h1>
          <p className="text-text text-justify w-full">
            Kandelco stands apart from other consulting firms because of our
            expertise in three distinct, yet complementary areas—business,
            community, and career consulting. Our consultants are specialists in
            each of these domains, meaning we bring deep knowledge and tailored
            solutions to every project.
          </p>
          <ul className="list-disc">
            <li className="mb-2 ml-4 text-black mt-4">
              <span className="font-semibold">Business Consulting:</span> Our
              team has extensive experience in helping businesses optimise their
              operations, strategize for growth, and overcome industry-specific
              challenges.
            </li>
            <li className="mb-2 ml-4 text-black">
              <span className="font-semibold">Community Consulting:</span> We
              understand the complexities of community work—from policy
              development to advocacy, engagement, and sustainability
              initiatives.
            </li>
            <li className="mb-2 ml-4 text-black">
              <span className="font-semibold"> Career Consulting:</span> We help
              individuals at every stage of their career journey, from students
              exploring options to professionals looking for career changes.
            </li>
          </ul>
        </div>

        <div className="container">
          <h1 className="text-tertiary text-xl md:text-3xl font-bold mb-4">
            A Personalised Approach
          </h1>
          <p className="text-text text-justify w-full">
            We don’t believe in one-size-fits-all solutions. Every client we
            work with has unique challenges, goals, and opportunities. That’s
            why we take a personalised approach to consulting, working closely
            with you to understand your needs and develop a strategy that fits
            your objectives.
          </p>
          <p className="text-text text-justify w-full">
            Our team doesn’t just give advice—we become a part of your journey,
            offering guidance and support at every stage. We build long-term
            partnerships with our clients, ensuring continued success beyond the
            initial consultation.
          </p>
        </div>
        <div className="container">
          <h1 className="text-tertiary text-xl md:text-3xl font-bold mb-4">
            A Reputation for Excellence
          </h1>
          <p className="text-text text-justify w-full">
            The reputation we’ve built over the years is a result of our
            commitment to providing the highest level of service. Our
            consultants are recognised for their expertise, professionalism, and
            ethical approach. We maintain the highest standards of integrity,
            ensuring that every decision we make is in the best interest of our
            clients.
          </p>
        </div>
      </section>
    </>
  );
}
