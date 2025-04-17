import About from "@/sections/About";
import Blogs from "@/sections/Blogs";
import Hero from "@/sections/Hero";
import NewSection from "@/sections/NewSection";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kandelco | Empowering Business Growth</title>
        <meta
          name="description"
          content="Kandelco Consulting delivers results-driven strategies across business, community, and professional development."
        />
        <meta
          name="keywords"
          content="study abroad, education consulting, international universities, study guidance"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero title="" />
        <Services />
        <About />
        <Testimonials />
        {/* <Contact /> */}
        <NewSection />
        <Blogs />
      </main>
    </>
  );
}
