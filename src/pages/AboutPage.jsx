import SectionTitle from "../components/SectionTitle";
import aboutSvg from "../assets/about.svg";

const AboutPage = () => {
  return (
    <main className="bg-white py-24 h-dvh">
      <div className="align-element grid md:grid-cols-2 items-center gap-16 h-[100%]">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </main>
  );
};
export default AboutPage;
