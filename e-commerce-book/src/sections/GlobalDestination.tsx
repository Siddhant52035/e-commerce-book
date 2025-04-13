import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import worldMap from "@/assets/images/worldmap.png";
import mobileMap from "@/assets/images/mobilemap.svg";

export default function GlobalDestination() {
  return (
    <section className="w-full flex_center flex-col gap-12 lg:p-24 px-4 py-10 font-jakarta">
      <SectionHeader
        smallTitle="Global Destinations"
        title="One-Stop for all the Best Universities across the globe"
        className="lg:w-[60%] w-full text-center"
      />
      <div className="map lg:hidden block w-full">
        <Image
          src={mobileMap}
          alt="World-Map"
          className="size-full object-contain"
        />
      </div>
      <div className="map w-full flex_center relative lg:block hidden">
        <Image
          src={worldMap}
          alt="World-Map"
          className="size-full object-contain"
        />
        <div className="absolute flex_center flex-col gap-1 left-48 top-24">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">Canada</p>
        </div>
        <div className="absolute flex_center flex-col gap-1 left-40 top-52">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">USA</p>
        </div>
        <div className="absolute flex_center flex-col gap-1 left-[39.5%] top-[16.5%]">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">England</p>
        </div>
        <div className="absolute flex_center flex-col gap-1 left-[43%] top-[22%]">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">Germany</p>
        </div>
        <div className="absolute flex_center flex-col gap-1 left-[82%] top-[32%]">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">Japan</p>
        </div>
        <div className="absolute flex_center flex-col gap-1 left-[84%] top-[78%]">
          <div className="size-2 rounded-full bg-tertiary"></div>
          <p className="text-base text-text">Australia</p>
        </div>
      </div>
    </section>
  );
}
