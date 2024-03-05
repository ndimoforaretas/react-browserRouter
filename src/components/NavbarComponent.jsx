import { nanoid } from "nanoid";
import { Link, Outlet } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

function NavbarComponent() {
  const links = [
    { id: nanoid(), path: "/", name: "Home" },
    { id: nanoid(), path: "/about", name: "About" },
    { id: nanoid(), path: "/skills", name: "Skills" },
    { id: nanoid(), path: "/projects", name: "Projects" },
  ];

  return (
    <>
      <nav className="bg-purple-100">
        <div className="align-element justify-between py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
          <h2 className="text-3xl font-bold flex items-center gap-1">
            <FaLaptopCode />
            BD<span className="text-purple-700">Code</span>
          </h2>
          <ul className="flex gap-x-3">
            {links.map((link) => (
              <li
                key={link.id}
                className="capitalize text-lg tracking-wide hover:text-purple-700 duration-300">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
