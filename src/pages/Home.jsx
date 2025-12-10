import React from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  // show first 3 featured
  const featured = properties.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find your next home</h1>
          <p>Search properties, filter results and contact agents — all in one place.</p>
          <Link to="/listings" className="btn hero-btn">Browse Listings</Link>
        </div>
        <div className="hero-image" aria-hidden>
          <img src="https://picsum.photos/id/1011/900/400" alt="hero" />
        </div>
      </section>

      <section className="featured">
        <h2>Featured Listings</h2>
        <div className="grid">
          {featured.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
        <div className="see-all">
          <Link to="/listings" className="btn-outline">See all listings</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
