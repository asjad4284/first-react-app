import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Contact = () => {
  return (
    <div className="animate-fade-in section container">
      <RevealOnScroll>
        <h1
          style={{
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Contact Us
        </h1>
      </RevealOnScroll>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4rem",
          justifyContent: "center",
        }}
      >
        {/* Contact Info */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <RevealOnScroll delay={0.2}>
            <h2
              style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }}
            >
              Get in Touch
            </h2>
            <p style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
              We'd love to hear from you. Whether you have a question about our
              menu, want to book a private event, or just want to say hello.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-color)",
                    fontSize: "1.2rem",
                  }}
                >
                  📍
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Address
                  </h4>
                  <p>123 Culinary Avenue, Foodie City, FC 90210</p>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-color)",
                    fontSize: "1.2rem",
                  }}
                >
                  📞
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Phone
                  </h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-color)",
                    fontSize: "1.2rem",
                  }}
                >
                  ✉️
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Email
                  </h4>
                  <p>reservations@deliciousbites.com</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "var(--bg-secondary)",
            padding: "2.5rem",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow)",
          }}
        >
          <RevealOnScroll delay={0.4}>
            <h3
              style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}
            >
              Send us a Message
            </h3>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "var(--border-radius)",
                    border: "1px solid #444",
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent-color)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "#444")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "var(--border-radius)",
                    border: "1px solid #444",
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent-color)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "#444")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "var(--border-radius)",
                    border: "1px solid #444",
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent-color)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "#444")}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ marginTop: "0.5rem" }}
              >
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
