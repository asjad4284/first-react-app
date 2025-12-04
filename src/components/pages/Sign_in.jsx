import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const SignIn = () => {
  return (
    <div
      className="animate-fade-in section container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "var(--bg-secondary)",
          padding: "2.5rem",
          borderRadius: "var(--border-radius)",
          boxShadow: "var(--shadow)",
          textAlign: "center",
        }}
      >
        <RevealOnScroll>
          <h1
            style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}
          >
            Welcome Back
          </h1>
          <p
            style={{
              color: "var(--text-primary)",
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}
          >
            Sign in to access your reservations and saved favorites.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  padding: "14px",
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
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "14px",
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

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.85rem",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" /> Remember me
              </label>
              <a
                href="#"
                style={{ color: "var(--accent-color)", textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn"
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              Sign In
            </button>
          </form>

          <div
            style={{
              margin: "2rem 0",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#888",
            }}
          >
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#444" }}
            ></div>
            <span>OR</span>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#444" }}
            ></div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "var(--border-radius)",
                border: "1px solid #444",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                style={{ width: "20px" }}
              />
              Continue with Google
            </button>

            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "var(--border-radius)",
                border: "1px solid #444",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                style={{ width: "20px" }}
              />
              Continue with Facebook
            </button>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <a
              href="#"
              style={{
                color: "var(--accent-color)",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Create Account
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default SignIn;
