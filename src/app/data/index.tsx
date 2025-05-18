import {
  FaUser,
  FaLaptopCode,    // More specific for projects
  FaHistory,       // More specific for experience
  FaPaperPlane,    // More modern contact icon
} from 'react-icons/fa';
import Image from "next/image";

export const navItems = [
  {
    name: "About",
    link: '#about',
    icon: <FaUser className="inline mr-2" />
  },
  {
    name: "Experience",
    link: '#experience',
    icon: <FaHistory className="inline mr-2" />
  },
    {
    name: "Projects",
    link: '#projects',
    icon: <FaLaptopCode className="inline mr-2" />
  },
  {
    name: "Contact",
    link: '#contact',
    icon: <FaPaperPlane className="inline mr-2" />
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Specializing in React.js, Next.js, and building scalable, responsive UIs.",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full pb-5",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 2,
    title: "Open to Collaboration and Communication",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 3,
    title: "Modern Tech Stack",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 4,
    title: "E-commerce & Web App Specialist",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 5,
    title: "Passionate About Building Clean, Scalable Interfaces",
    description: "",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 6,
    title: "I'm available for freelance or full-time opportunities — let’s connect.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 p-0 max-h-[10rem] md:max-h-none",
    imgClassName: "",
    titleClassName: "absolute justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  },
];


export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "Explore the wonders of our solor system with this captivating 3D simulation of the planets using Three.js",
    img: "/projects/portfolio.png",
    link: "/ui.earth.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    des: "Explore the wonders of our solor system with this captivating 3D simulation of the planets using Three.js",
    img: "/projects/portfolio.png",
    link: "/ui.earth.com"
  },
]


export const experienceData = [
  {
    title: "2024 – Present",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-800 dark:text-neutral-200">
          Working at TeknoPoint/DEPT as a Frontend Developer, contributing to multiple enterprise-grade e-commerce projects using React and Next.js.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/experience/ceat.png"
            alt="CEAT Project"
            width={400}  // specify width
            height={200} // specify height
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
          <Image
            src="/experience/vs.png"
            alt="Vijay Sales"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
          <Image
            src="/experience/ceatspecialty.png"
            alt="CEAT Specialty"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
          <Image
            src="/experience/birlaopus.png"
            alt="Birla Opus"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023 (Freelance Projects)",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-800 dark:text-neutral-200">
          Completed multiple freelance projects for clients in Canada and India, focused on delivering performance-optimized, responsive websites using React and Tailwind CSS.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/experience/nimbusbytes.png"
            alt="Nimbusbytes"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
          <Image
            src="/experience/classic.png"
            alt="Classic Safety"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
          <Image
            src="/experience/whitecabs.png"
            alt="WhiteCabs"
            width={400}
            height={200}
            className="rounded-lg object-cover md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022 (Internship)",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-800 dark:text-neutral-200">
          Interned at Aero2Astro and worked on live client websites using Laravel, gaining full-stack exposure and experience in collaborative teams.
        </p>
      </div>
    ),
  },
];
