import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import heroMain from "@/assets/hero-main.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden">
          <img
            src={heroMain}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="section-padding w-full">
              <h1 className="hero-text text-white mb-6 max-w-4xl">
                Unleash Your Potential
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Premium athletic gear engineered for champions who refuse to settle.
              </p>
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our most popular athletic gear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-muted">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/shop"
              className="group relative h-96 overflow-hidden bg-primary"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-black text-white mb-2">Footwear</h3>
                <p className="text-white/80">Step up your game</p>
              </div>
            </Link>

            <Link
              to="/shop"
              className="group relative h-96 overflow-hidden bg-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-black text-white mb-2">Apparel</h3>
                <p className="text-white/80">Dress for success</p>
              </div>
            </Link>

            <Link
              to="/shop"
              className="group relative h-96 overflow-hidden bg-accent"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-black text-white mb-2">Accessories</h3>
                <p className="text-white/80">Complete your look</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a community dedicated to excellence, performance, and pushing
            boundaries.
          </p>
          <Link to="/about">
            <Button size="lg" variant="outline">
              Learn More About Us
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
