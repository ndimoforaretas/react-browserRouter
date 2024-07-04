import { nanoid } from "nanoid";
styling
import { Link, Outlet } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

main

function NavbarComponent() {
  const links = [
    { id: nanoid(), path: "/", name: "Home" },
    { id: nanoid(), path: "/about", name: "About" },
    { id: nanoid(), path: "/skills", name: "Skills" },
    { id: nanoid(), path: "/projects", name: "Projects" },
 styling
 main
  ];

  return (
    <>
styling
      <nav className="bg-purple-100">
        <div className="align-element justify-between py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
          <Link to="/">
            <h2 className="text-3xl font-bold flex items-center gap-1 cursor-pointer">
              <FaLaptopCode />
              BD<span className="text-purple-700">Code</span>
            </h2>
          </Link>
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

 main
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
