import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-primary py-16 mt-auto">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex-[1_1_300px]">
            <h2 className="font-heading text-text-secondary mb-4">
              Delicious Bites
            </h2>
            <p className="leading-relaxed max-w-[300px]">
              Experience the art of culinary excellence. Fresh ingredients,
              passionate chefs, and an unforgettable atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-[1_1_200px]">
            <h3 className="text-accent-color mb-4">Quick Links</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="text-inherit no-underline transition-colors duration-300 hover:text-accent-color"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-inherit no-underline transition-colors duration-300 hover:text-accent-color"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-inherit no-underline transition-colors duration-300 hover:text-accent-color"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="text-inherit no-underline transition-colors duration-300 hover:text-accent-color"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-[1_1_200px]">
            <h3 className="text-accent-color mb-4">Contact</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>123 Culinary Avenue</li>
              <li>Foodie City, FC 90210</li>
              <li>(555) 123-4567</li>
              <li>info@deliciousbites.com</li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex-[1_1_200px]">
            <h3 className="text-accent-color mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {["instagram", "facebook", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-primary no-underline transition-all duration-300 hover:bg-accent-color hover:-translate-y-[3px]"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#444] pt-8 text-center text-sm text-[#888]">
          &copy; {new Date().getFullYear()} Delicious Bites. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
