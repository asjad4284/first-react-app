import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const chefs = [
  {
    id: 1,
    name: "Alessandro Rossi",
    role: "Executive Chef",
    image: "/images/chef1.png",
    bio: "With over 20 years of experience in Michelin-starred kitchens, Alessandro brings a passion for authentic Italian flavors and modern techniques.",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Head Pastry Chef",
    image: "/images/chef2.png",
    bio: "Elena's desserts are a work of art. She combines classic French pastry skills with innovative flavor combinations that delight the senses.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Sous Chef",
    image: "/images/chef3.png",
    bio: "Marcus is the backbone of our kitchen. His dedication to precision and sourcing the finest local ingredients ensures every dish is perfect.",
  },
];

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero / Intro */}
      <section className="section container" style={{ textAlign: "center" }}>
        <RevealOnScroll>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            }}
          >
            Our Mission
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
              color: "var(--text-primary)",
            }}
          >
            At Delicious Bites, we believe that dining is an experience that
            engages all the senses. Our mission is to create memories through
            food, blending tradition with innovation. We are committed to
            sustainability, sourcing locally, and treating every ingredient with
            respect.
          </p>
        </RevealOnScroll>
      </section>

      {/* Meet the Chefs */}
      <section
        className="section"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container">
          <RevealOnScroll>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "3rem",
                color: "var(--text-secondary)",
              }}
            >
              Meet the Chefs
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {chefs.map((chef) => (
              <RevealOnScroll key={chef.id} delay={0.1 * chef.id}>
                <div
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderRadius: "var(--border-radius)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow)",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div style={{ height: "300px", overflow: "hidden" }}>
                    <img
                      src={chef.image}
                      alt={chef.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <div
                    style={{
                      padding: "2rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        color: "var(--accent-color)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {chef.name}
                    </h3>
                    <h4
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "1rem",
                      }}
                    >
                      {chef.role}
                    </h4>
                    <p
                      style={{
                        color: "var(--text-primary)",
                        lineHeight: "1.6",
                        fontSize: "0.95rem",
                      }}
                    >
                      {chef.bio}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
