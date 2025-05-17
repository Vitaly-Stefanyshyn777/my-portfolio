import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/petvally.png";
import haruFashion from "public/Smartphone-store .png";
import haruApi from "public/pharmacy-frontend.png";
import astroPaper from "public/projects/astro-paper.webp";
import nextBookstore from "public/Robot.png";
import northtree from "public/northtree-main.png";
import LearnLingo from "public/LearnLingo.png";
// import RentalCar from "public/Rental-Car.png";
import RobotBlaze from "public/Robot-Blaze.png";
import Barbershop from "public/Barbershop.png";
import watchcharm from "public/watchcharm.png";
import bakery from "public/bakery.png";
import RapidForge from "public/RapidForge.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Vitaly-Stefanyshyn777"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "DeFintellect",
    type: "Frontend",
    image: (
      <Image
        src="https://github.com/user-attachments/assets/1c55d6c2-a148-45a3-a9e2-ed7b0be309dd"
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "DeFintellect is an advanced DeFi investment portfolio navigator for the IOTA EVM network, leveraging state-of-the-art artificial intelligence to transform how users interact with decentralized finance.",
    tags: ["Astro", "TypeScript", "React", "TailwindCSS", "React Query"],
    liveUrl: "https://de-fintellect.vercel.app/",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/DeFintellect",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Pet-Store",
    type: "Frontend",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "We are creating a community of pet owners and caregivers, using AI, and a selection of various pet products.",
    tags: [
      "React",
      "TypeScript",
      "CSS3",
      "TailwindCSS",
      "Next.js",
      "PostgreSQLt",
      "Prisma",
      "NeonDB",
      "Zustand",
      "Cloudinary",
    ],
    liveUrl: "https://pet-store-wgnq.vercel.app/",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/Pet-Store",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Smartphone Store",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An e-commerce app for browsing and purchasing smartphones. Includes wishlist, cart, and multi-language support.",
    tags: ["Astro", "TypeScript", "React", "TailwindCSS", "React Query"],
    liveUrl: "https://smartphone-store-one.vercel.app/",
    codeUrl: "smartphone-store-one.vercel.app",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Pharmacy",
    type: "Backend",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "REST API for an e-commerce project with CRUD, authentication, password reset, and full-text search.",
    tags: [
      "Javascript",
      "React",
      "Prisma",
      "Node.js",
      "Express.js",
      "ReduxToolkit",
      "MUI",
      "Axios",
    ],
    liveUrl: "https://pharmacy-frontend-six.vercel.app",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/Pharmacy-Frontend",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Robot",
    type: "Frontend + HeadlessCMS",
    image: (
      <Image
        src={nextBookstore}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Online bookstore built with Next.js and Strapi CMS. Includes dynamic pages and headless content management.",
    tags: ["TypeScript", "React", "TailwindCSS", "React Query", "Next.js"],
    liveUrl: "https://robot-tawny.vercel.app/",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/Robot",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Northtree",
    type: "Backend",
    image: (
      <Image
        src={northtree}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Admin dashboard interface built with Shadcn UI and Vite. Focuses on accessibility and responsive design.",
    tags: ["TypeScript", "React", "TailwindCSS", "React Query", "Next.js"],
    liveUrl: "https://northtree-main.vercel.app",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/northtree-main",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "LearnLingo",
    type: "Backend",
    image: (
      <Image
        src={LearnLingo}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Educational admin interface with Redux and user system. Supports CRUD operations and dynamic UI components.",
    tags: ["Javascript", "React", "Express.js", "ReduxToolkit", "MUI", "Axios"],
    liveUrl: "https://learn-lingo-umber.vercel.app",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/LearnLingo",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "RapidForge",
    type: "Backend",
    image: (
      <Image
        src={RapidForge}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "CRM-style dashboard featuring cards, forms, and filters. Integrates backend with Node.js and Prisma.",
    tags: [
      "Javascript",
      "React",
      "Prisma",
      "Node.js",
      "Express.js",
      "ReduxToolkit",
      "Axios",
    ],
    liveUrl: "https://project-rapid-forge-frontend.vercel.app",
    codeUrl: "https://github.com/alex-usenko325/project-RapidForge-frontend",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Robot Blaze",
    type: "Backend",
    image: (
      <Image
        src={RobotBlaze}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Startup landing page with custom visuals. Built using HTML, SCSS, and vanilla JavaScript.",
    tags: ["Vite", "TypeScript", "HTML", "SCSS", "JavaScript"],
    liveUrl: "https://vitaly-stefanyshyn777.github.io/Robot-Blaze-STP-7971/",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/Robot-Blaze-STP-7971",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Barbershop",
    type: "Backend",
    image: (
      <Image
        src={Barbershop}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Responsive landing page for a barbershop with stylish design and interactive elements.",
    tags: ["Vite", "TypeScript", "HTML", "SCSS", "JavaScript"],
    liveUrl: "https://vitaly-stefanyshyn777.github.io/Barbershop123/",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/Barbershop123",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "WatchCharm",
    type: "Backend",
    image: (
      <Image
        src={watchcharm}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Team-built online watch store featuring adaptive layout and modern UI components.",
    tags: ["Vite", "TypeScript", "HTML", "SCSS", "JavaScript"],
    liveUrl: "https://sashko-kapillar.github.io/Team-GoIT-project-13/",
    codeUrl: "https://github.com/Sashko-kapillar/Team-GoIT-project-13",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Modern Bakery",
    type: "Backend",
    image: (
      <Image
        src={bakery}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Bakery website with animated sections and tradition highlights. Built with responsive SCSS layout.",
    tags: ["Vite", "TypeScript", "HTML", "SCSS", "JavaScript"],
    liveUrl:
      "https://vitaly-stefanyshyn777.github.io/modern-bakery/#traditions-section",
    codeUrl: "https://github.com/Vitaly-Stefanyshyn777/modern-bakery",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
];

export default ProjectSection;
