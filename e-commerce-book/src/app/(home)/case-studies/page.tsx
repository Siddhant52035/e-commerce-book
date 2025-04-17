import SectionHeader from "@/components/SectionHeader";
import blogImage1 from "@/assets/images/cs1.jpg";
import blogImage2 from "@/assets/images/cs2.jpg";
import blogImage3 from "@/assets/images/cs3.jpg";
import BlogCard from "@/components/BlogCard";
import CaseCard from "@/components/CaseCard";
import PageHeader from "@/components/PageHeader";

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

export default function CaseStudies() {
  return (
    <>
      <PageHeader title="Case Studies"  />
      <section className="w-full flex_center flex-col lg:py-20 font-jakarta py-10 lg:px-0 px-4 lg:gap-12 container gap-6">
        <SectionHeader
          smallTitle="Case Studies"
          title="Look Through Our Case Studies"
        />
        <div className="w-full grid lg:grid-cols-3 overflow-hidden grid-cols-1 gap-8">
          {caseStudies.map((blog, index) => {
            return (
              <CaseCard key={index} image={blog.image} title={blog.title} />
            );
          })}
        </div>
      </section>
    </>
  );
}
