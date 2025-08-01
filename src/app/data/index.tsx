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
    id: "1",
    title: "Qizee - AI ",
    des: "An AI-powered multiplayer quiz generator app that allows users to build custom quizzes instantly. Built using Next.js,Sockets,shadcn/ui, Prisma ORM, and PostgreSQL, with DeepSeek AI powering the quiz generation",
    img: "/projects/quiz-generator.png",
    link: "https://qizee-mutiplayer.onrender.com/"
  },
  {
    id: "2",
    title: "UI Library - Snapi Ui",
    des: "A custom UI library built with Next.js, FumaDocs, and Tailwind CSS. It features accessible, responsive, and themeable components for rapid development",
    img: "/projects/snapiui.png",
    link: "https://snapiui.vercel.app/"
  },
  {
    id: "3",
    title: "Portfolio Website",
    des: "Portfolio website using Nextjs and aceternity ui",
    img: "/projects/portfolio.png",
    link: "#"
  },
]


export const experienceData = [
  {
    title: "2024 – Present",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-200">
          Working at TeknoPoint/DEPT as a Frontend Developer, contributing to multiple enterprise-grade e-commerce projects.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a href="https://www.ceat.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/ceat.png"
              alt="CEAT Project"
              width={400}  // specify width
              height={200} // specify height
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
          <a href="https://www.vijaysales.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/vs.png"
              alt="Vijay Sales"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
          <a href="https://www.ceatspecialty.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/ceatspecialty.png"
              alt="CEAT Specialty"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
          <a href="https://www.birlaopus.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/birlaopus.png"
              alt="Birla Opus"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "2023 (Freelance Projects)",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-200">
          Completed multiple freelance projects for clients in Canada and India, focused on delivering performance-optimized, responsive websites using React and Tailwind CSS.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a href="https://nimbusbytes.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/nimbusbytes.png"
              alt="Nimbusbytes"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
          <a href="https://www.classicsafety.in" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/classic.png"
              alt="Classic Safety"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
          <a href="https://whitecabs.ca" target="_blank" rel="noopener noreferrer">
            <Image
              src="/experience/whitecabs.png"
              alt="WhiteCabs"
              width={400}
              height={200}
              className="rounded-lg object-cover md:h-44 lg:h-60"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "2022 (Internship)",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg lg-text-2xl font-normal text-neutral-200">
          Interned at Aero2Astro and worked on live client websites using Laravel, gaining full-stack exposure and experience in collaborative teams.
        </p>
      </div>
    ),
  },
];
