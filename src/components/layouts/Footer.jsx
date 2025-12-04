import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        padding: "4rem 0 2rem",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Delicious Bites
            </h2>
            <p style={{ lineHeight: "1.6", maxWidth: "300px" }}>
              Experience the art of culinary excellence. Fresh ingredients,
              passionate chefs, and an unforgettable atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--accent-color)", marginBottom: "1rem" }}>
              Quick Links
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent-color)")
                  }
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent-color)")
                  }
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent-color)")
                  }
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent-color)")
                  }
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--accent-color)", marginBottom: "1rem" }}>
              Contact
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>123 Culinary Avenue</li>
              <li>Foodie City, FC 90210</li>
              <li>(555) 123-4567</li>
              <li>info@deliciousbites.com</li>
            </ul>
          </div>

          {/* Social */}
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--accent-color)", marginBottom: "1rem" }}>
              Follow Us
            </h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["instagram", "facebook", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--accent-color)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bg-primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #444",
            paddingTop: "2rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#888",
          }}
        >
          &copy; {new Date().getFullYear()} Delicious Bites. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
