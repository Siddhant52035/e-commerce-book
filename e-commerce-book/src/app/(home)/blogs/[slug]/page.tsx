import { newBlogs } from "../page";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogDetails({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { slug } = resolvedParams ?? {};

  const revertSlug = (slug: string): string => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatSlug = (name: string): string => {
    return name.split(":")[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  // Find the matching product
  const blog = newBlogs.find((p) => formatSlug(p.title) === slug);

  if (!blog) return notFound();

  return (
    <main className="w-full">
      <PageHeader link={`/blogs/${slug}`} title={revertSlug(slug)} />
      <section className="py-10 bg-[#F5F5F5] w-full">
        <div className="flex_center flex-col gap-8 container">
          <h3 className="text-3xl font-semibold text-center text-secondary">
            {blog.title}
          </h3>
          <div className="flex_center flex-col w-full gap-8">
            <div className="flex_center flex-col gap-3 w-full">
              <img
                src={blog.image.src}
                alt="blog image"
                className="w-full h-[70vh] object-cover"
              />
              {/* <p className="text-text text-sm">Image Caption</p> */}
            </div>
            <div className="flex_center flex-col gap-8">
              <h4 className="text-base text-text text-justify w-full">
                {blog.description}
              </h4>
            </div>
            <div className="flex_center flex-col gap-8">
              {blog.subContent.map((content, index) => (
                <div key={index}>
                  <p className="text-secondary text-xl md:text-3xl text-center md:text-left  font-medium mb-4">
                    {content.title}
                  </p>
                  {content.desc1 && (
                    <p className="text-text text-base text-justify mb-4">
                      {content.desc1}
                    </p>
                  )}
                  {content.desc2 && (
                    <p className="text-text text-base text-justify mb-4">
                      {content.desc2}
                    </p>
                  )}
                  {content.desc3 && (
                    <p className="text-text text-base text-justify mb-4">
                      {content.desc3}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex_center flex-col gap-8">
              <h4 className="text-3xl font-medium text-secondary text-center md:text-left w-full">
                {blog.conclusion.title}
              </h4>

              <p className="text-text text-base text-justify">
                {blog.conclusion.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
