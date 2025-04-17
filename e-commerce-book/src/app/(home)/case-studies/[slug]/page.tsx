
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import blogImage1 from "@/assets/images/cs1.jpg";
import blogImage2 from "@/assets/images/cs2.jpg";
import blogImage3 from "@/assets/images/cs3.jpg";

const caseStudies = [
  {
    image: blogImage1,

    title: "Business Consulting – Transforming a Local Retail Startup",
    client: "Boutique Fashion Retailer, Melbourne",
    focusArea: "Retail | Size: Small Business",
    challenge:
      " The client, a boutique fashion store with great product offerings, was facing stagnant growth. They struggled with customer retention, limited online sales, and an inefficient stock management system.",
    solution:
      " Kandelco performed a full business audit to identify growth barriers. We developed a data-driven marketing plan, introduced a simple CRM for better customer engagement, and streamlined inventory systems. Our consultants also mentored the owner on financial planning and digital sales strategy.",
    outcome:
      " Within six months, the business saw a 40% increase in revenue, boosted online orders by 65%, and improved stock turnover by 30%. The business owner also gained confidence and clarity in their business direction.",
  },
  {
    image: blogImage2,
    title: "Community Consulting – Empowering Youth in Regional NSW",
    client: "Local Government Council, NSW",
    focusArea: "Youth Engagement & Employment",
    challenge:
      "A regional council faced high youth unemployment and disengagement. Local schools and employers weren’t aligned, and young people lacked access to training, mentorship, and work experience.",
    solution:
      "Kandelco worked with council stakeholders, schools, and business owners to design a youth engagement program. The initiative included mentorship sessions, employability workshops, internship placements, and regular community forums.",
    outcome:
      "In the first year, over 120 young people participated. 60% found employment or enrolled in further training within six months. The program has since been expanded to nearby towns and is now a model for inclusive community development.",
  },
  {
    image: blogImage3,
    title: "Career Consulting – Helping a Professional Pivot to a New Industry",
    client: "Mid-Level Professional, Brisbane",
    focusArea: "Career Transition | Experience: 10+ Years in Hospitality",
    challenge:
      "The client had extensive hospitality experience but wanted a shift into project management. Despite transferrable skills, they lacked industry contacts, confidence, and a clear pathway.",
    solution:
      "Kandelco assigned a career coach who worked closely with the client to identify core strengths, reframe their experience, and build a strong project management narrative. We revised their CV and LinkedIn profile, coached them through interviews, and helped them complete a short certification.",
    outcome:
      "Within 8 weeks, the client secured a Project Coordinator role in a growing events company. They have since been promoted and now mentor others going through similar transitions.",
  },
];
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CaseDetails({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { slug } = resolvedParams ?? {};

  const revertSlug = (slug: string): string => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatSlug = (name: string): string => {
    return name.split(/[:–]/)[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  // Find the matching product
  const blog = caseStudies.find((p) => formatSlug(p.title) === slug);

  if (!blog) return notFound();

  return (
    <main className="w-full">
      <PageHeader  title={revertSlug(slug)} />
      <section className="py-10 bg-[#F5F5F5] w-full">
        <div className="flex_center flex-col gap-8 container">
          <h3 className="text-3xl font-semibold text-center text-secondary">
            {blog.title}
          </h3>
          <div className="flex_center flex-col w-full gap-6">
            <div className="flex_center flex-col gap-3 w-full">
              <img
                src={blog.image.src}
                alt="blog image"
                className="w-full h-[70vh] object-cover"
              />
              {/* <p className="text-text text-sm">Image Caption</p> */}
            </div>
            <div className="w-full">
              <span className="text-base font-bold text-secondary md:text-left">
                Client:{" "}
              </span>
              <span className="text-base text-text text-left ">
                {blog.client}
              </span>
            </div>
            <div className="w-full">
              <span className="text-base font-bold text-secondary md:text-left">
                Focus Area:{" "}
              </span>
              <span className="text-base text-text text-left ">
                {blog.focusArea}
              </span>
            </div>

            <div className="flex_center flex-col gap-3">
              <h4 className="text-3xl font-medium text-secondary text-center md:text-left w-full">
                Challenge
              </h4>

              <p className="text-text text-base text-justify">
                {blog.challenge}
              </p>
            </div>
            <div className="flex_center flex-col gap-3">
              <h4 className="text-3xl font-medium text-secondary text-center md:text-left w-full">
                Our Solution
              </h4>

              <p className="text-text text-base text-justify">
                {blog.solution}
              </p>
            </div>
            <div className="flex_center flex-col gap-3">
              <h4 className="text-3xl font-medium text-secondary text-center md:text-left w-full">
                Outcome
              </h4>

              <p className="text-text text-base text-justify">{blog.outcome}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
