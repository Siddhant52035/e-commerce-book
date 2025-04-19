import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import blogImage1 from "@/assets/images/blog1.jpg";
import blogImage2 from "@/assets/images/blog2.jpg";
import blogImage3 from "@/assets/images/blog3.jpg";
import BlogCard from "@/components/BlogCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const newBlogs = [
  {
    image: blogImage1,

    title: "5 Steps to a Future-Proof Business",
    description:
      "As the business landscape evolves rapidly, companies must adapt to new trends, technologies, and market demands to ensure they remain competitive. Future-proofing your business is about developing strategies that can withstand disruptions, adapt to changing conditions, and thrive in an uncertain world. Whether you're running a startup or a well-established enterprise, these five steps will help ensure your business remains relevant and sustainable in the years ahead.",
    subContent: [
      {
        title: "Embrace Digital Transformation",
        desc1:
          "In today's increasingly digital world, businesses that fail to leverage technology risk falling behind. Digital transformation is not just about adopting new tools—it's about reshaping your business processes, enhancing customer experiences, and optimizing operations. By investing in technology, businesses can increase efficiency, reduce costs, and improve customer satisfaction.",
        desc2:
          "To start, assess your current operations and identify areas where digital tools can streamline processes. Whether it’s automating administrative tasks, implementing customer relationship management (CRM) systems, or using cloud computing for data storage, the possibilities are endless. For example, cloud platforms enable businesses to access real-time data, collaborate more efficiently, and scale resources as needed.",
        desc3:
          "Another important aspect of digital transformation is ensuring that your employees are trained to work with new technologies. Upskilling your workforce is critical to staying competitive, as employees will be more productive and innovative when they can harness the latest tools.",
      },
      {
        title: "Foster a Culture of Innovation",
        desc1:
          "Innovation is key to future-proofing your business. However, fostering innovation is not just about launching new products or services—it’s about cultivating an organizational culture where creativity, experimentation, and continuous improvement are encouraged.",
        desc2:
          "To create this environment, start by empowering employees at all levels to contribute their ideas. Foster open communication, provide platforms for brainstorming, and create an atmosphere where it’s safe to fail and learn from mistakes. Encourage cross-department collaboration to spark new solutions to existing problems.",
        desc3:
          "In addition to internal innovation, keep an eye on industry trends and emerging technologies. Regularly engage with thought leaders, attend industry conferences, and invest in research and development. By staying at the forefront of your field, your business can identify new opportunities before competitors.",
      },
      {
        title: "Adapt to Changing Consumer Preferences",
        desc1:
          "Consumer behavior is constantly evolving, and businesses that fail to keep up with these changes may find themselves losing market share. Whether it’s shifts in buying habits, preferences for sustainability, or demand for personalized experiences, staying in tune with your customers' needs is essential.",
        desc2:
          "To stay ahead of the curve, regularly gather feedback from your customers. Use surveys, focus groups, and social media listening tools to understand their preferences, pain points, and expectations. Consumer feedback can help you improve existing products, refine your marketing strategies, and innovate your offerings.",
        desc3:
          "Additionally, businesses need to adopt a more customer-centric approach. Personalization, convenience, and a seamless omnichannel experience are increasingly important. Tailoring your marketing efforts and services to meet individual customer needs can create stronger connections and brand loyalty.",
      },
      {
        title: "Implement Agile Practices",
        desc1:
          "Agility is a crucial characteristic of future-proof businesses. The ability to pivot and adjust strategies quickly in response to external challenges—whether it’s economic shifts, market changes, or new technologies—is what separates resilient companies from those that become obsolete.",
        desc2:
          "Agile practices allow businesses to adapt quickly, improve productivity, and manage projects more efficiently. This approach involves breaking down large projects into smaller, manageable tasks and using iterative cycles to make continuous improvements. By maintaining flexibility, businesses can respond to market demands and unforeseen disruptions with greater speed.",
        desc3:
          "To implement agile practices, consider adopting agile frameworks like Scrum or Kanban for project management. Encourage teams to work collaboratively, communicate frequently, and focus on delivering value to customers. An agile mindset promotes innovation and helps businesses remain competitive in the face of change.",
      },
      {
        title: "Focus on Sustainability and Social Responsibility",
        desc1:
          "Sustainability is no longer a buzzword—it’s a business imperative. Consumers, employees, and investors are increasingly prioritizing businesses that demonstrate social and environmental responsibility. Future-proof businesses recognize that their success is linked to their ability to contribute positively to society and the planet.",
        desc2:
          "To future-proof your business, consider how you can integrate sustainability into your operations. Start by reducing waste, conserving energy, and sourcing materials responsibly. Also, consider your company’s role in the community and how you can support social causes. This could include supporting local businesses, engaging in corporate social responsibility (CSR) initiatives, or aligning your brand with sustainability certifications.",
        desc3:
          "Investors are also looking at a company’s environmental, social, and governance (ESG) performance when making decisions. By focusing on sustainability, you not only contribute to a better world but also position your business for long-term success.",
      },
    ],
    conclusion: {
      title: "Conclusion",
      description:
        "Future-proofing your business requires a proactive approach, a willingness to adapt, and a long-term vision. By embracing digital transformation, fostering innovation, responding to changing consumer preferences, implementing agile practices, and prioritizing sustainability, businesses can position themselves for success, no matter what the future holds.",
    },
  },
  {
    image: blogImage2,
    title: "Building Sustainable Community Projects",
    description:
      "Community development is about creating lasting positive change that benefits everyone. However, building sustainable community projects requires careful planning, thoughtful engagement, and a commitment to long-term success. Whether you’re developing a local initiative or a broader community program, these key strategies will help you build a project that not only serves the current needs of the community but also leaves a lasting impact.",

    subContent: [
      {
        title: "Identify the Community’s Needs",
        desc1:
          "Before embarking on any community project, it’s essential to understand the specific needs of the community. This requires in-depth research, consultations, and active listening to stakeholders. Engage with community members, local leaders, and organizations to identify the most pressing challenges and opportunities. Whether it’s addressing access to education, improving healthcare, or supporting local businesses, a well-defined need will guide the project's focus and ensure that resources are used effectively.",
        desc2:
          "Use surveys, focus groups, and interviews to collect data and feedback. Engage diverse groups within the community to ensure that every voice is heard and that the project addresses the concerns of all stakeholders, including marginalized or underserved populations.",
        desc3: "",
      },
      {
        title: "Create a Clear Vision and Set Goals",
        desc1:
          "Once you’ve identified the community’s needs, develop a clear vision for the project. A well-articulated vision will serve as the foundation for your efforts and guide the decision-making process. This vision should be aligned with the community’s values and goals.",
        desc2:
          "Next, set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for the project. These goals should be focused on achieving tangible results and ensuring that the community benefits in meaningful ways. For example, if the project is aimed at improving local education, a goal might be to increase high school graduation rates by 20% within five years.",
        desc3: "",
      },
      {
        title: "Engage Stakeholders and Build Partnerships",
        desc1:
          "Sustainability is not something that can be achieved by a single entity—it requires collaboration. Building strong partnerships with local organizations, businesses, and government agencies is crucial for the long-term success of the project. These partnerships can provide resources, expertise, and networks that help the project reach a wider audience and achieve greater impact.",
        desc2:
          "Engage stakeholders early on and keep them involved throughout the project. Regular communication, feedback loops, and shared decision-making will create a sense of ownership and ensure that the project stays relevant to the community’s evolving needs.",
        desc3: "",
      },
      {
        title: "Focus on Capacity Building and Empowerment",
        desc1:
          "For a community project to be sustainable, it must empower local individuals and organizations to take ownership of the project’s future. Capacity building—providing community members with the skills, knowledge, and resources to lead initiatives—ensures that the project continues even after external support ends.",
        desc2:
          "Provide training, mentorship, and resources to local leaders and organizations. Encourage community members to take active roles in the planning, implementation, and evaluation of the project. By building local capacity, you help ensure the project’s sustainability and create lasting positive change.",
        desc3: "",
      },
      {
        title: "Measure Impact and Adjust Strategies",
        desc1:
          "Sustainability is not just about maintaining operations—it’s about measuring the project’s impact and making continuous improvements. Set up monitoring and evaluation systems to track the progress of the project against the goals you’ve set. This will help identify areas of success as well as opportunities for improvement.",
        desc2:
          "Regularly collect data, conduct evaluations, and seek feedback from stakeholders to assess the project’s effectiveness. If necessary, adjust your strategies to better align with the community’s evolving needs and priorities.",
        desc3: "",
      },
      {
        title: "Ensure Financial Sustainability",
        desc1:
          "A sustainable community project requires a stable financial foundation. While initial funding may come from grants, donations, or sponsorships, it’s important to plan for long-term financial sustainability. Develop a diversified funding strategy that includes multiple revenue streams—such as membership fees, fundraising events, or government contracts—to ensure that the project can continue without relying solely on external funding.",
        desc2:
          "Consider building endowment funds or setting up income-generating activities that will provide ongoing support for the project. A sustainable financial model will give your community project the resources it needs to continue growing and making a difference.",
        desc3: "",
      },
    ],
    conclusion: {
      title: "Conclusion",
      description:
        "Building sustainable community projects is a powerful way to create lasting positive change. By focusing on the needs of the community, engaging stakeholders, building local capacity, and ensuring financial sustainability, you can create initiatives that have a meaningful impact and continue to thrive for years to come.",
    },
  },
  {
    image: blogImage3,
    title: "Crafting a Resume That Gets Results",
    description:
      "A well-crafted resume is often the first impression you make on potential employers. In today’s competitive job market, a strong resume is essential to stand out and secure interviews. Whether you're a recent graduate or an experienced professional looking to advance your career, these tips will help you craft a resume that grabs attention and gets results.",
    subContent: [
      {
        title: "Start with a Strong Headline and Summary",
        desc1:
          "Your resume should immediately communicate who you are and what you bring to the table. Begin with a headline that summarizes your professional identity—such as “Experienced Marketing Specialist” or “Skilled Software Developer with 5+ Years of Experience.”",
        desc2:
          "Next, write a compelling summary that highlights your key achievements, skills, and career goals. Keep it concise, focusing on what makes you unique and how you can add value to a potential employer. A strong summary helps recruiters quickly understand your qualifications and sets the tone for the rest of the resume.",
        desc3: "",
      },
      {
        title: "Tailor Your Resume to the Job",
        desc1:
          "One size does not fit all when it comes to resumes. Tailoring your resume to each job application significantly increases your chances of standing out. Review the job description carefully and highlight the skills and experiences most relevant to the role.",
        desc2:
          "Adjust your resume to match the employer's needs by emphasizing the specific qualifications they are looking for. This may involve tweaking your professional summary, skills section, and experience to better align with the job description.",
        desc3: "",
      },
      {
        title: "Highlight Achievements, Not Just Responsibilities",
        desc1:
          "Rather than listing job duties, focus on your accomplishments and the impact you made in each role. Employers want to know how you contributed to the success of the organization, not just what you were responsible for.",
        desc2:
          "Use quantifiable metrics to showcase your achievements. For example, instead of saying, “Managed a team,” say, “Led a team of 10 to achieve a 25% increase in sales within 6 months.” Numbers help demonstrate your value and give employers a clear sense of your contributions.",
        desc3: "",
      },
      {
        title: "Use Action-Oriented Language",
        desc1:
          "Your resume should read like a story of success, and action-oriented language helps bring it to life. Use strong action verbs like “led,” “developed,” “implemented,” and “achieved” to describe your accomplishments. These verbs create a sense of initiative and leadership, which are qualities employers highly value.",
        desc2:
          "Avoid using passive phrases like “was responsible for” or “assisted with.” Instead, focus on what you actively did and the results you achieved.",
        desc3: "",
      },
      {
        title: "Showcase Relevant Skills and Certifications",
        desc1:
          "Make sure to include a section that highlights your key skills and relevant certifications. This section should be tailored to each job application and should focus on the skills that are most important for the position.",
        desc2:
          "For example, if you’re applying for a software development role, list programming languages and technologies you’re proficient in. If you’re applying for a marketing position, highlight skills such as digital marketing, SEO, and content creation.",
        desc3: "",
      },
      {
        title: "Keep It Concise and Well-Organized",
        desc1:
          "Your resume should be easy to read and to the point. Use clear headings, bullet points, and short paragraphs to organize your information. Avoid long paragraphs and dense text that can overwhelm the reader.",
        desc2:
          "Aim to keep your resume to one or two pages, depending on your level of experience. Recruiters often skim resumes, so it’s important that your most relevant information is easily accessible.",
        desc3: "",
      },
      {
        title: "Proofread and Edit",
        desc1:
          "A resume with spelling or grammatical errors can hurt your chances of getting noticed. Proofread your resume multiple times to ensure it’s error-free. You can also ask a friend or mentor to review it for feedback and suggestions.",
        desc2: "",
        desc3: "",
      },
    ],
    conclusion: {
      title: "Conclusion",
      description:
        "A resume that gets results is one that clearly communicates your value to potential employers. By tailoring your resume to the job, highlighting your achievements, and using action-oriented language, you can create a document that sets you apart from the competition.",
    },
  },
];

export default function Blogs() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader title="Blogs & Industry Insights" />
      <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
        <SectionHeader
          smallTitle="Notes"
          
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-hidden w-full gap-8 gap-y-16">
          {newBlogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            );
          })}
        </div>
        {/* <div className="flex items-center gap-2">
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowBack />
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            1
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            2
          </button>
          <p className="flex_center p-2 rounded-md text-sm size-10">....</p>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            5
          </button>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowForward />
          </button>
        </div> */}
      </section>
    </main>
  );
}
