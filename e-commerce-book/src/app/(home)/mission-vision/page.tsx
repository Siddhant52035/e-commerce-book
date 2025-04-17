import Image from "next/image";
import aboutSecondImage from "@/assets/images/team.jpg";
import PageHeader from "@/components/PageHeader";

export default function MissionVision() {
  return (
    <>
      <PageHeader title="Mission & Vision"  />
      <div className="image flex_center h-[80vh] w-full relative">
        <Image
          src={aboutSecondImage}
          alt="Global Education"
          className="size-full object-cover"
        />
        <div className="absolute bottom-0 lg:flex_center container hidden w-full px-24 lg:px-0 ">
          <div className="flex w-full h-16 bg-[#f5fbff]"></div>
        </div>
      </div>
      <section className="w-full flex_center container lg:px-0 px-4 bg-[#f5fbff] ">
        <div className="flex_center md:flex-row flex-col pb-16 w-full shadow-xl mb-10">
          <div className="flex flex-col w-full px-4 lg:px-12 gap-4 lg:pt-0 pt-10">
            <h2 className="text-[40px] font-semibold text-secondary">
              Our Mission
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text  w-full">
                To empower organisations, uplift communities, and elevate
                individual careers through tailored consulting solutions that
                deliver sustainable impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full px-4 lg:px-12 gap-4">
            <h2 className="text-[40px] font-semibold text-secondary">
              Our Vision
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text w-full">
                To become Australia’s most trusted and innovative consulting
                partner, delivering strategies and solutions that make a
                measurable difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
