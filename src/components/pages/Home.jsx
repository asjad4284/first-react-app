import React from "react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white z-0">
        {/* Background Image with Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero.png')] bg-cover bg-center brightness-[0.4] -z-10"></div>

        <div className="container text-center relative z-10">
          <RevealOnScroll>
            <h1 className="text-[4.5rem] mb-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-white">
              Taste the Extraordinary
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-2xl mb-10 max-w-[700px] mx-auto text-[#f0f0f0] leading-relaxed">
              Experience culinary perfection with our award-winning menu and
              atmosphere.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <button className="btn text-xl py-4 px-12">Book a Table</button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section bg-bg-primary">
        <div className="container">
          <RevealOnScroll>
            <h2 className="text-center text-[2.5rem] mb-12 text-text-secondary">
              Our Signature Dishes
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {/* Dish Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-custom transition-transform duration-300 h-full hover:-translate-y-2.5">
                <img
                  src="/images/pasta.png"
                  alt="Truffle Pasta"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-accent-color">Truffle Pasta</h3>
                  <p className="text-text-primary mb-4">
                    Handmade pasta tossed in a rich truffle cream sauce with
                    fresh herbs.
                  </p>
                  <span className="text-xl font-bold text-text-secondary">
                    $24
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Dish Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-custom transition-transform duration-300 h-full hover:-translate-y-2.5">
                <img
                  src="/images/steak.png"
                  alt="Ribeye Steak"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-accent-color">Prime Ribeye</h3>
                  <p className="text-text-primary mb-4">
                    Grilled to perfection, served with asparagus and garlic
                    mashed potatoes.
                  </p>
                  <span className="text-xl font-bold text-text-secondary">
                    $45
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Dish Card 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-custom transition-transform duration-300 h-full hover:-translate-y-2.5">
                <img
                  src="/images/dessert.png"
                  alt="Lava Cake"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-accent-color">Chocolate Lava</h3>
                  <p className="text-text-primary mb-4">
                    Decadent warm chocolate cake with a molten center and
                    vanilla bean ice cream.
                  </p>
                  <span className="text-xl font-bold text-text-secondary">
                    $12
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-bg-secondary">
        <div className="container flex items-center gap-16 flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <RevealOnScroll>
              <h2 className="text-[2.5rem] mb-6 text-text-secondary">
                Our Story
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2010, Delicious Bites has been serving the community
                with passion and creativity. We believe that food is not just
                sustenance, but an art form that brings people together.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-lg leading-relaxed mb-8">
                Our chefs source only the finest local ingredients to create
                dishes that are both comforting and innovative.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <button className="btn">Learn More</button>
            </RevealOnScroll>
          </div>
          <div className="flex-1 min-w-[300px]">
            <RevealOnScroll delay={0.2}>
              <div className="w-full h-[400px] bg-bg-primary rounded-lg flex items-center justify-center border-2 border-accent-color bg-[url('/images/chef3.png')] bg-cover bg-center"></div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
