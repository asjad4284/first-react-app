import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Background Image with Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
            zIndex: -1,
          }}
        ></div>

        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <RevealOnScroll>
            <h1
              style={{
                fontSize: "4.5rem",
                marginBottom: "1.5rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "white",
              }}
            >
              Taste the Extraordinary
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "2.5rem",
                maxWidth: "700px",
                margin: "0 auto 2.5rem",
                color: "#f0f0f0",
                lineHeight: "1.6",
              }}
            >
              Experience culinary perfection with our award-winning menu and
              atmosphere.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <button
              className="btn"
              style={{ fontSize: "1.2rem", padding: "16px 48px" }}
            >
              Book a Table
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Dishes */}
      <section
        className="section"
        style={{ backgroundColor: "var(--bg-primary)" }}
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
              Our Signature Dishes
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Dish Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "var(--border-radius)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  transition: "transform 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/images/pasta.png"
                  alt="Truffle Pasta"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      marginBottom: "0.5rem",
                      color: "var(--accent-color)",
                    }}
                  >
                    Truffle Pasta
                  </h3>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    Handmade pasta tossed in a rich truffle cream sauce with
                    fresh herbs.
                  </p>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "var(--text-secondary)",
                    }}
                  >
                    $24
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Dish Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "var(--border-radius)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  transition: "transform 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/images/steak.png"
                  alt="Ribeye Steak"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      marginBottom: "0.5rem",
                      color: "var(--accent-color)",
                    }}
                  >
                    Prime Ribeye
                  </h3>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    Grilled to perfection, served with asparagus and garlic
                    mashed potatoes.
                  </p>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "var(--text-secondary)",
                    }}
                  >
                    $45
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Dish Card 3 */}
            <RevealOnScroll delay={0.3}>
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "var(--border-radius)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  transition: "transform 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/images/dessert.png"
                  alt="Lava Cake"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      marginBottom: "0.5rem",
                      color: "var(--accent-color)",
                    }}
                  >
                    Chocolate Lava
                  </h3>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    Decadent warm chocolate cake with a molten center and
                    vanilla bean ice cream.
                  </p>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "var(--text-secondary)",
                    }}
                  >
                    $12
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="section"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <RevealOnScroll>
              <h2
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                Our Story
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                Founded in 2010, Delicious Bites has been serving the community
                with passion and creativity. We believe that food is not just
                sustenance, but an art form that brings people together.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                Our chefs source only the finest local ingredients to create
                dishes that are both comforting and innovative.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <button className="btn">Learn More</button>
            </RevealOnScroll>
          </div>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <RevealOnScroll delay={0.2}>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "var(--bg-primary)",
                  borderRadius: "var(--border-radius)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--accent-color)",
                  backgroundImage: "url(/images/chef3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
