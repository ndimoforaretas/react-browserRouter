import { FaLaptopCode } from "react-icons/fa";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5 flex items-center gap-2">
      <FaLaptopCode className="text-3xl" />
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};
export default SectionTitle;
