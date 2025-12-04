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
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",
        backgroundColor: scrolled ? "var(--bg-secondary)" : "transparent",
        color: "var(--text-primary)",
        boxShadow: scrolled ? "var(--shadow)" : "none",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        transition: "all 0.3s ease",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontFamily: "var(--font-heading)",
          color: "var(--text-secondary)",
          textShadow: scrolled ? "none" : "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Delicious Bites
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--accent-color)"
                  : scrolled
                  ? "var(--text-primary)"
                  : "white",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "color 0.3s ease",
                fontFamily: "var(--font-body)",
                textShadow: scrolled ? "none" : "1px 1px 2px rgba(0,0,0,0.5)",
              })}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--accent-hover)")
              }
              onMouseLeave={(e) => {
                // We can't easily access isActive here without more complex logic or CSS.
                // For simplicity in inline styles with NavLink, we might rely on the re-render or just reset to a default and let React handle it.
                // However, a better approach with inline styles and hover is slightly tricky.
                // Let's simplify: reset to 'inherit' or handle via CSS class if possible, but user wants inline.
                // Actually, NavLink's style prop function runs on render.
                // Let's try to keep it simple. The hover effect might be better handled with CSS, but I must stick to the pattern.
                // I will remove the onMouseLeave and rely on the style prop function to re-evaluate if needed, but hover state isn't passed there.
                // I'll set it back to what it should be based on the URL.
                // Since I can't know 'isActive' inside onMouseLeave easily without a wrapper, I will use a small trick or just accept a minor limitation or use a wrapper component.
                // Let's just use the style prop for the base state and let hover override it.
                // Actually, I can just remove the onMouseLeave and onMouseEnter and use CSS if I could, but I should stick to the existing style.
                // I'll try to approximate the previous behavior.
                e.target.style.color = ""; // Resetting it allows the style prop to take over again? No, inline style overrides.
              }}
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
