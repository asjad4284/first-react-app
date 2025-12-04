import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Contact = () => {
  return (
    <div className="animate-fade-in section container">
      <RevealOnScroll>
        <h1 className="text-text-secondary mb-12 text-center text-[3rem]">
          Contact Us
        </h1>
      </RevealOnScroll>

      <div className="flex flex-wrap gap-16 justify-center">
        {/* Contact Info */}
        <div className="flex-1 min-w-[300px]">
          <RevealOnScroll delay={0.2}>
            <h2 className="text-accent-color mb-6">Get in Touch</h2>
            <p className="mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our
              menu, want to book a private event, or just want to say hello.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-bg-secondary rounded-full flex items-center justify-center text-accent-color text-xl">
                  📍
                </div>
                <div>
                  <h4 className="text-text-secondary mb-1">Address</h4>
                  <p>123 Culinary Avenue, Foodie City, FC 90210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-bg-secondary rounded-full flex items-center justify-center text-accent-color text-xl">
                  📞
                </div>
                <div>
                  <h4 className="text-text-secondary mb-1">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-bg-secondary rounded-full flex items-center justify-center text-accent-color text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-text-secondary mb-1">Email</h4>
                  <p>reservations@deliciousbites.com</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Contact Form */}
        <div className="flex-1 min-w-[300px] bg-bg-secondary p-10 rounded-lg shadow-custom">
          <RevealOnScroll delay={0.4}>
            <h3 className="text-text-secondary mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-[#444] bg-bg-primary text-text-primary outline-none focus:border-accent-color transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-[#444] bg-bg-primary text-text-primary outline-none focus:border-accent-color transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded-lg border border-[#444] bg-bg-primary text-text-primary outline-none resize-y focus:border-accent-color transition-colors duration-300"
                ></textarea>
              </div>
              <button type="submit" className="btn mt-2">
                Send Message
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Contact;
