import { nanoid } from "nanoid";
import { Outlet, NavLink } from "react-router-dom";

function NavbarComponent() {
  const links = [
    { id: nanoid(), path: "/", name: "Home" },
    { id: nanoid(), path: "/about", name: "About" },
    { id: nanoid(), path: "/skills", name: "Skills" },
    { id: nanoid(), path: "/projects", name: "Projects" },
    { id: nanoid(), path: "/login", name: "Login" },
  ];

  return (
    <>
      {" "}
      <nav className="">
        <ul className="flex space-x-4 bg-gray-800 text-white p-4">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 underline" : ""
                }>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
