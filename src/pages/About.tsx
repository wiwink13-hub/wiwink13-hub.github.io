import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={aboutHero}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="hero-text text-white text-center px-6">Our Story</h1>
          </div>
        </div>

        {/* Content */}
        <div className="section-padding max-w-4xl mx-auto">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-black mb-4">Built for Athletes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Since our founding, we've been dedicated to creating premium athletic gear
                that empowers athletes to reach their full potential. Every product is
                engineered with precision, tested by professionals, and designed to elevate
                performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that everyone has an athlete within them. Our mission is to
                provide innovative, high-quality athletic gear that helps you push your
                limits and achieve your goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through cutting-edge technology, sustainable practices, and unwavering
                commitment to excellence, we're redefining what's possible in athletic
                performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-4">Innovation First</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our research and development team works tirelessly to incorporate the latest
                advancements in materials science, biomechanics, and design. The result?
                Products that don't just meet expectations—they exceed them.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-4">Sustainability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to minimizing our environmental impact. From sustainable
                materials to ethical manufacturing practices, we're building a better future
                for athletes and the planet.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
