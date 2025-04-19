import SectionHeader from "../components/SectionHeader";
import blogImage1 from "@/assets/images/blog1.jpg";
import blogImage2 from "@/assets/images/blog2.jpg";
import blogImage3 from "@/assets/images/blog3.jpg";
import BlogCard from "@/components/BlogCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const blogs = [
  {
    image: blogImage1,

    title: "5 Steps to a Future-Proof Business",
    description:
      "As the business landscape evolves rapidly, companies must adapt to new trends, technologies, and market demands to ensure they remain competitive. Future-proofing your business is about developing strategies that can withstand disruptions, adapt to changing conditions, and thrive in an uncertain world. Whether you're running a startup or a well-established enterprise, these five steps will help ensure your business remains relevant and sustainable in the years ahead.",
  },
  {
    image: blogImage2,

    title: "Building Sustainable Community Projects",
    description:
      "Community development is about creating lasting positive change that benefits everyone. However, building sustainable community projects requires careful planning, thoughtful engagement, and a commitment to long-term success. Whether you’re developing a local initiative or a broader community program, these key strategies will help you build a project that not only serves the current needs of the community but also leaves a lasting impact.",
  },
  {
    image: blogImage3,

    title: "Crafting a Resume That Gets Results",
    description:
      "A well-crafted resume is often the first impression you make on potential employers. In today’s competitive job market, a strong resume is essential to stand out and secure interviews. Whether you're a recent graduate or an experienced professional looking to advance your career, these tips will help you craft a resume that grabs attention and gets results.",
  },
];

export default function Blogs() {
  return (
    <section className="w-full flex_center flex-col font-jakarta py-10 lg:px-0 px-4 lg:gap-12 container gap-6">
      <SectionHeader
        smallTitle="Blogs & Articles"
       
      />
      <div className="w-full grid lg:grid-cols-3 overflow-hidden grid-cols-1  gap-8">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              image={blog.image}
              description={blog.description}
              title={blog.title}
            />
          );
        })}
      </div>
      <button className="bg-secondary group text-white py-3 px-6 rounded-md  overflow-hidden transition duration-300">
        <a
          href="/blogs"
          className="flex items-center justify-center gap-2 hover:text-2xl text-xl font-normal"
        >
          View All{" "}
          <IoIosArrowRoundForward className="me-2 scale-125 group-hover:scale-150 transition-all duration-300" />
        </a>
      </button>
    </section>
  );
}
