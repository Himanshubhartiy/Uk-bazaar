import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sial from "./assets/Sial.png";
import iyuu from "./assets/iyuu.png";
import cup from "./assets/cup.png";

function Card() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const productSection = document.getElementById("product__section");
    const rect = productSection.getBoundingClientRect();

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
    <div className="container-fluid" id="product__section">
      <div className="row product_section">
        <div className="mt-5 products col-12 col-md-4 col-lg-3">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="selling"
          >
            Best Selling Products
          </motion.h3>
          <p>
            Explore our unique collection of Uttarakhand crafts, handpicked for
            you.
          </p>
          <Link to="./seemore" className="text-decoration-none">
            <motion.div
              className="btn btn-primary btn-lg text-dark"
              initial={{ y: 20, opacity: 0 }}
              animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              See more <i className="bi bi-arrow-right"></i>
            </motion.div>
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className="row mt-4">
            {[
              {
                img: sial,
                title: "Rambaans Natural Fiber lantern",
                price: "₹900.00",
              },
              {
                img: iyuu,
                title: "Rambaans Natural Fiber bag",
                price: "₹400.00",
              },
              {
                img: cup,
                title: "Wooden Crafts cup",
                price: "₹500.00",
              },
            ].map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                <motion.div
                  className="product-card"
                  initial={{ opacity: 0, rotateY: -180 }}
                  animate={hasAnimated ? { opacity: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <img
                    src={product.img}
                    className="card-img-top best-product rounded-3"
                    alt={product.title}
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
