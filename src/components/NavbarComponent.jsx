import { Link, Outlet, NavLink } from "react-router-dom";

function NavbarComponent() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="">
      <ul className="flex space-x-4 bg-gray-800 text-white p-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive && "text-yellow-300 underline"
              }>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  );
}

export default NavbarComponent;
