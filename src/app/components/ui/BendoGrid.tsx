import Image from "next/image";
import { cn } from "../../../../lib/utils";
import { BackgroundBeamsWithCollision } from "./CollusionBackground";
import { BackgroundGradientAnimation } from "./GradientBackground";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Content = ({
  title,
  description,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => (
  <>
    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-base z-10">
      {description}
    </div>
    <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
      {title}
    </div>
  </>
);

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  id?: number;
  description?: string | React.ReactNode;
  img: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento p-4 transition duration-200 shadow-input hover:shadow-xl dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className,
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        backgroundColor: "rgb(4,7,29)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="main image"
              className={cn(imgClassName, "object-center object-cover")}
              fill
              sizes="100%"
              priority
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="spare image"
              className={cn(
                imgClassName,
                "object-center object-cover w-full h-full",
              )}
              fill
              sizes="100%"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 lg:p-10",
          )}
        >
          {id !== 3 && id !== 6 ? (
            <BackgroundBeamsWithCollision>
              <Content title={title} description={description} />
            </BackgroundBeamsWithCollision>
          ) : (
            <Content title={title} description={description} />
          )}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Node", "Redux", "MongoDB"].map((item) => (
                  <span
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                {/* Additional content can go here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
