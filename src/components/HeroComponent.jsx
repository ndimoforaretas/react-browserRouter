import { nanoid } from "nanoid";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  const socialLinks = [
    {
      id: nanoid(),
      url: "https://github.com/ndimoforaretas",
      icon: (
        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-purple-700 duration-300" />
      ),
    },
    {
      id: nanoid(),
      url: "https://www.linkedin.com/in/ndimofor-ndimofor-aretas-360917119/",
      icon: (
        <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-purple-700 duration-300" />
      ),
    },
    {
      id: nanoid(),
      url: "https://twitter.com/aretasndi",
      icon: (
        <FaXTwitter className="h-8 w-8 text-slate-500 hover:text-purple-700 duration-300" />
      ),
    },
  ];
  return (
    <div className="bg-purple-100 py-24 h-dvh">
      <div className="align-element grid md:grid-cols-2 items-center gap-8 h-[100%]">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Aretas</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            {socialLinks.map((link) => (
              <Link to={link.url} key={link.id} target="_blank">
                {link.icon}
              </Link>
            ))}
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default HeroComponent;
