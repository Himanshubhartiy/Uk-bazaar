import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import roman from "./assets/roman.png";
import bhotia from "./assets/Bhotia.png";
import food from "./assets/food.png";

function Categories() {
  const [hasAnimated, setHasAnimated] = useState(false); // State to trigger animation

  // Function to handle scroll event and trigger animation
  const handleScroll = () => {
    const categoriesSection = document.getElementById("categories-section");
    const rect = categoriesSection.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
      setHasAnimated(true); // Trigger animation
      window.removeEventListener("scroll", handleScroll); // Clean up
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="categories" id="categories-section">
      <div className="text-center">
        <motion.h3
          className="mb-3"
          initial={{ y: -50, opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Categories
        </motion.h3>
        <p className="mb-5">
          Discover authentic Uttarakhand products, crafted with care and
          inspired by its rich culture.
        </p>
      </div>

      <div className="row categorie position-relative text-center">
        <motion.div
          className="col-12 col-md-4 mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img
            src={roman}
            alt="Traditional Handicrafts"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Traditional Handicrafts</h5>
          <p className="px-3">
            Explore unique handicrafts made by local artisans, showcasing
            traditional techniques and designs.
          </p>
        </motion.div>

        <motion.div
          className="col-12 col-md-4 mb-4 middle-image"
          initial={{ x: -50, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={bhotia}
            alt="Cultural Clothing"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Cultural Clothing</h5>
          <p className="px-3 px-md-5">
            Discover vibrant clothing reflecting the rich culture and heritage
            of Uttarakhand.
          </p>
          <Link
            to={"/explore"}
            className="btn btn-secondary btn-lg text-decoration-none text-dark explore"
          >
            Explore <i className="bi bi-arrow-right"></i>
          </Link>
        </motion.div>

        <motion.div
          className="col-12 col-md-4 mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src={food}
            alt="Local Foods"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Local Foods</h5>
          <p className="px-3">
            Taste the authentic flavors of Uttarakhand with our selection of
            local delicacies.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;
