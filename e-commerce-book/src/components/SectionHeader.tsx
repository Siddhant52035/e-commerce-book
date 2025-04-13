import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  title,
  smallTitle,
  className,
}: {
  title: string;
  smallTitle?: string;
  className?: string;
}) {
  return (
    <div className={twMerge("section-header flex_center flex-col", className)}>
      <p className="text-base font-bold lg:text-start text-center">
        {smallTitle}
      </p>
      <h1 className="md:text-[1.9rem] text-2xl text-tertiary  font-semibold text-center ">
        {title}
      </h1>
    </div>
  );
}
