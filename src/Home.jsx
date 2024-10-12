import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rectangle from "./assets/Rectangle.png";
import plant from "./assets/plant.png";
import Vector from "./assets/Vector1.png";
import Vector2 from "./assets/Vector2.png";
import { motion } from "framer-motion";

function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("home__banner");
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);
  return (
    <>
      <div className="container banner rounded-5 mt-5" id="home__banner">
        <div className="row inner_banner">
          <div className="col-12 col-md-6 mt-5">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="ms-5"
            >
              Shop Local, Shop Natural
            </motion.h1>

            <p className="ms-5 mt-4">
              Discover a wide range of authentic Uttarakhand crafts and support
              local artisans dedicated to preserving tradition and quality.
            </p>

            <motion.div
              as={Link}
              to="/products"
              className="btn btn-secondary ms-5 mt-2 mb-3 btn-lg text-decoration-none text-dark"
              initial={{ y: 20, opacity: 0 }}
              animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Explore Products
            </motion.div>
          </div>

          <div className="col-12 col-md-6 mt-5 pt-5">
            <div className="position-relative plant">
              <img
                src={plant}
                className="position-absolute plant-wrap"
                alt="Plant"
              />
              <img
                src={Vector}
                className="position-absolute vector-wrap"
                alt="Vector graphic 1"
              />
              <img
                src={Vector2}
                className="position-absolute vector2-wrap"
                alt="Vector graphic 2"
              />
            </div>
            <img
              src={rectangle}
              className="img-fluid main_visual"
              alt="Main visual"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
