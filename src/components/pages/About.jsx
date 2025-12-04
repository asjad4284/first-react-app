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
      <section className="section container text-center">
        <RevealOnScroll>
          <h1 className="text-[3rem] mb-6 text-text-secondary">Our Mission</h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-xl leading-relaxed max-w-[800px] mx-auto text-text-primary">
            At Delicious Bites, we believe that dining is an experience that
            engages all the senses. Our mission is to create memories through
            food, blending tradition with innovation. We are committed to
            sustainability, sourcing locally, and treating every ingredient with
            respect.
          </p>
        </RevealOnScroll>
      </section>

      {/* Meet the Chefs */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <RevealOnScroll>
            <h2 className="text-center text-[2.5rem] mb-12 text-text-secondary">
              Meet the Chefs
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            {chefs.map((chef) => (
              <RevealOnScroll key={chef.id} delay={0.1 * chef.id}>
                <div className="bg-bg-primary rounded-lg overflow-hidden shadow-custom transition-transform duration-300 flex flex-col h-full hover:-translate-y-2.5">
                  <div className="h-[300px] overflow-hidden">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-accent-color mb-2">{chef.name}</h3>
                    <h4 className="text-text-secondary text-sm uppercase tracking-wider mb-4">
                      {chef.role}
                    </h4>
                    <p className="text-text-primary leading-relaxed text-[0.95rem]">
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
