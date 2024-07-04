import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { GiDaisy } from "react-icons/gi";
import SectionTitle from "../components/SectionTitle";
import SkillsCard from "../components/SkillsCard";

const SkillsPage = () => {
  const skills = [
    {
      id: nanoid(),
      title: "HTML5 & CSS3",
      icon: <FaHtml5 className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    },
    {
      id: nanoid(),
      title: "Javascript ES6+",
      icon: <FaJs className="h-16 w-16 text-purple-500" />,
      text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    },
    {
      id: nanoid(),
      title: "ReactJS",
      icon: <FaReact className="h-16 w-16 text-purple-500" />,
      text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    },
    {
      id: nanoid(),
      title: "NextJS",
      icon: <TbBrandNextjs className="h-16 w-16 text-purple-500" />,
      text: "Advanced proficiency in NextJS, developing efficient and interactive fullstack applications with a strong emphasis on component-based architecture.",
    },
    {
      id: nanoid(),
      title: "Typescript",
      icon: <SiTypescript className="h-14 w-14 text-purple-500" />,
      text: "Proficient in TypeScript, building scalable and maintainable web applications with a strong focus on type safety and code quality.",
    },
    {
      id: nanoid(),
      title: "NodeJS",
      icon: <FaNodeJs className="h-14 w-14 text-purple-500" />,
      text: "Highly skilled in NodeJS, building scalable and maintainable backend applications with a strong focus on performance and efficiency.",
    },
    {
      id: nanoid(),
      title: "Python",
      icon: <FaPython className="h-14 w-14 text-purple-500" />,
      text: "Proficient in Python, building scalable and maintainable fullstack applications with a strong focus on performance and efficiency.",
    },
    {
      id: nanoid(),
      title: "GoLang",
      icon: <FaGolang className="h-16 w-16 text-purple-500" />,
      text: "Proficient in Golang, building scalable and maintainable backend applications with a strong focus on performance and efficiency.",
    },
    {
      id: nanoid(),
      title: "Git & Github",
      icon: <FaGithub className="h-14 w-14 text-purple-500" />,
      text: "Highly skilled in Git & Github, adeptly managing and collaborating on projects with a strong focus on version control and code quality.",
    },
    {
      id: nanoid(),
      title: "MongoDB",
      icon: <SiMongodb className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in MongoDB, building scalable and maintainable NoSQL databases with a strong focus on performance and efficiency.",
    },
    {
      id: nanoid(),
      title: "PostgreSQL",
      icon: <SiPostgresql className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in PostgreSQL, building scalable and maintainable SQL databases with a strong focus on performance and efficiency.",
    },
    {
      id: nanoid(),
      title: "Jest",
      icon: <SiJest className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in Jest, building scalable and maintainable unit tests with a strong focus on code quality and test coverage.",
    },
    {
      id: nanoid(),
      title: "Bootstrap",
      icon: <FaBootstrap className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in Bootstrap, building responsive and visually appealing websites with a strong focus on user experience and accessibility.",
    },
    {
      id: nanoid(),
      title: "TailwindCSS",
      icon: <SiTailwindcss className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in TailwindCSS, building responsive and visually appealing websites with a strong focus on user experience and accessibility.",
    },
    {
      id: nanoid(),
      title: "DaisyUI",
      icon: <GiDaisy className="h-16 w-16 text-purple-500" />,
      text: "Highly skilled in DaisyUI, building responsive and visually appealing websites with a strong focus on user experience and accessibility.",
    },
  ];
  return (
    <div className="py-20 align-element ">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
};
export default SkillsPage;
