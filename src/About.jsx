import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import large from "./assets/large.png";
import fast from "./assets/fast.png";
import free from "./assets/free.png";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("about__section");
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
      <div className="container about" id="about__section">
        <div className="text-center mb-5">
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h3>
          <p>
            Explore the rich culture of Uttarakhand through our unique products.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <motion.img
              src={large}
              className="Large mb-4 img-fluid"
              alt="Large assortment of products"
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <h4 className="mb-3">Diverse Collection</h4>
            <p>
              We offer a wide range of authentic crafts, clothes, foods, and
              instruments that celebrate Uttarakhand's heritage.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <motion.img
              src={free}
              className="Large mb-4 img-fluid"
              alt="Fast and free delivery"
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <h4 className="mb-3">Fast & Free Delivery</h4>
            <p>
              Enjoy quick delivery within 4 days or less, with no hidden fees on
              all orders.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <motion.img
              src={fast}
              className="Large mb-4 img-fluid"
              alt="24/7 customer support"
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <h4 className="mb-3">24/7 Customer Support</h4>
            <p>
              Get answers to your inquiries anytime, with dedicated support
              available around the clock.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
