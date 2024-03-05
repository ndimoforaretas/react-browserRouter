import { nanoid } from "nanoid";
import ProjectsCard from "../components/ProjectsCard";
import SectionTitle from "../components/SectionTitle";

const ProjectsPage = () => {
  const projects = [
    {
      id: nanoid(),
      img: "https://ndimoforaretas.github.io/portfolio/_next/static/media/coffee-explorer.103ab436.gif",
      url: "https://react-projects.netlify.app/",
      github: "https://github.com/john-smilga",
      title: "Coffee Explorer",
      text: "A full-stack NextJS App for coffee nerds and enthusiasts built with NextJS, FoursquareAPI, UnsplashAPI and deployed on Netlify.",
    },
    {
      id: nanoid(),
      img: "https://ndimoforaretas.github.io/portfolio/_next/static/media/modern-eshop.3b965659.gif",
      url: "https://react-projects.netlify.app/",
      github: "https://github.com/john-smilga",
      title: "React E-Shop Website",
      text: "A full-stack E-commerce App built with ReactJS, TypeScript, Firebase, Redux Saga integrated with Stripe and Google Authentication.",
    },
    {
      id: nanoid(),
      img: "https://ndimoforaretas.github.io/portfolio/_next/static/media/random-quote.26e283ef.gif",
      url: "https://clever-quotes-app.vercel.app/",
      github: "https://github.com/ndimoforaretas/clever-quotes-app",
      title: "Clever Quotes App (PWA)",
      text: "ReactJS Random Quote generator app with WhatsApp sharing capabilities. Built with ReactJS, Bootstrap, and random-quote API.",
    },
  ];
  return (
    <main className="py-20 align-element ">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </main>
  );
};
export default ProjectsPage;
