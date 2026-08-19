import { Link, NavLink } from "react-router";
import logo from "../assets/010.png";
import { useState, useEffect } from "react";

const NavBarApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (event) => {
      setShow(event.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const listMenu = [
    {
      text: "Inicio",
      path: "/",
    },
    {
      text: "Sobre nosotros",
      path: "about",
    },
    {
      text: "Comunidad",
      path: "comunidad",
    },
    {
      text: "Cerrar sesión",
      path: "login",
    },
  ];
  return (
    <nav className="flex px-5 md:justify-between md:items-center flex-col md:flex-row">
      <div className="flex justify-between items-center">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-15" />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setShow(!show)}>Menu</button>
        </div>
      </div>
      {show && (
        <div className="my-3">
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {listMenu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-cyan-900 font-bold" : "text-black"
                  }
                  //   onClick={() => setShow(false)}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarApp;
