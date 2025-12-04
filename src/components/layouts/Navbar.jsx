import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "signin", path: "/signin" },
  ];

  return (
    <nav
      className={`flex justify-between items-center px-8 fixed top-0 w-full z-[100] transition-all duration-300 box-border ${
        scrolled ? "py-4 bg-bg-secondary shadow-custom" : "py-6 bg-transparent"
      }`}
    >
      <div
        className={`text-[1.8rem] font-bold font-heading text-text-secondary ${
          scrolled ? "" : "drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        }`}
      >
        Delicious Bites
      </div>
      <ul className="flex list-none gap-8 m-0 p-0">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `no-underline cursor-pointer capitalize transition-colors duration-300 font-body ${
                  isActive
                    ? "text-accent-color font-bold"
                    : scrolled
                    ? "text-text-primary"
                    : "text-white"
                } ${
                  scrolled ? "" : "drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
                } hover:text-accent-hover`
              }
            >
              {link.name === "signin" ? "Sign In" : link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
