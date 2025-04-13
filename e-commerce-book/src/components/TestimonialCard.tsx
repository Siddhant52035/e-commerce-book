"use client";
import { GoStarFill } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    position: "Business Development Client",
    text: "Working with Kandelco transformed the way we approach strategy and growth. Their team helped us streamline operations and identify new revenue opportunities. We've seen a 30% increase in efficiency and a renewed sense of direction across our leadership team.",
  },
  {
    name: " Marcus D.",
    position: "Community Partner",
    text: "Kandelco played a key role in helping us design and implement a community outreach program that has now impacted over 500 families. Their team’s ability to combine strategic thinking with a deep understanding of community needs is unmatched.",
  },
  {
    name: "Lena K.",
    position: "Career Coaching Client",
    text: "I was feeling lost in my career until I connected with Kandelco. Their coaching sessions gave me clarity, confidence, and a clear plan. I’ve since transitioned into a role I love and continue to apply what I learned through their support.",
  },
  {
    name: " Marcus D.",
    position: "Government Project Collaborator",
    text: "Kandelco brought structure, innovation, and accountability to our project. Their team collaborated seamlessly with stakeholders and delivered practical solutions aligned with our policy objectives. We look forward to working with them again",
  },
];

export default function TestimonialCard() {
  return (
    <div className="flex flex-col items-center container  2xl:px-20 w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full custom-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-xl mx-auto bg-gradient-to-br from-blue-200 to-blue-400 p-[6px] rounded-2xl">
              <div className="bg-white p-6 rounded-xl relative">
                {/* Thumbs Up Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <ThumbsUp className="text-white " color="white" size={24} />
                  </div>
                </div>

                {/* Quotation Mark */}
                <div className="absolute top-4 right-6 text-blue-300 text-5xl leading-none select-none">
                  <ImQuotesLeft className="size-12" />
                </div>

                {/* Content */}
                <div className="pt-16">
                  <p className="text-gray-800 mb-6">{testimonial.text}</p>

                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination below slider */}
      <div className="mt-4">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
