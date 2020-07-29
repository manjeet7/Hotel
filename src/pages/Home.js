import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRoom from "../Components/FeaturedRoom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="HooneyMoon Suite"
          subtitle="Enjoy our
    suite at $3000"
        >
          <Link to="/room" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
