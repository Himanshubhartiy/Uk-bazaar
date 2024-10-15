import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image from "./assets/Image.png";

function Carousel() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const checkInView = () => {
    const element = document.getElementById("carousel");
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    return isInView;
  };

  const handleScroll = () => {
    if (checkInView() && !hasAnimated) {
      setHasAnimated(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    if (checkInView()) {
      setHasAnimated(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="recent-review position-relative" id="carousel">
      <img
        src="img/Line3.png"
        className="position-absolute Check-lines"
        alt=""
      />
      <div className="">
        <div className="container check-review">
          <motion.h2
            className="mb-3 text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            What customers say about Uk-बाज़ार?
          </motion.h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000" // Slides every 2 seconds
              data-bs-pause="hover" // Stops sliding on mouse hover
            >
              <div className="carousel-inner">
                <motion.div
                  className={`carousel-item active ${
                    hasAnimated ? "animate" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row justify-content-center px-5 pt-5">
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-2 mb-3">
                      <div className="card-body px-4 py-4">
                        <div className="text-center">
                          <h6 className="card-subtitle mb-2">
                            Amazing Craftsmanship!
                          </h6>
                          <p className="card-text mb-3 review">
                            The traditional Uttarakhand crafts sold here are of
                            excellent quality. I love supporting local artisans
                            through Uk-बाज़ार!
                          </p>
                        </div>
                        <div className="">
                          <div className="text-center p-2">
                            <img
                              src={image1}
                              alt="cus1"
                              className="profile-image"
                            />
                          </div>
                          <div className="text-center profile">
                            <h4 className="card-title">Ramesh Pandey</h4>
                            <p>Local Artisan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`carousel-item ${hasAnimated ? "animate" : ""}`}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row justify-content-center px-5 pt-5">
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-2 mb-3">
                      <div className="card-body px-4 py-4">
                        <div className="text-center">
                          <h6 className="card-subtitle  mb-2">
                            Great for Gifts!
                          </h6>
                          <p className="card-text mb-3 review">
                            Uk-बाज़ार has a fantastic selection of handmade
                            items, perfect for gifting something unique and
                            rooted in Uttarakhand's culture.
                          </p>
                        </div>
                        <div className="mb-3">
                          <div className="text-center p-2">
                            <img
                              src={image2}
                              alt="Cus2"
                              className="profile-image"
                            />
                          </div>
                          <div className="align-self-center text-center profile">
                            <h4 className="card-title">Suhani Rawat</h4>
                            <p>Shop Owner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`carousel-item ${hasAnimated ? "animate" : ""}`}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row justify-content-center px-5 pt-5">
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-2 mb-3">
                      <div className="card-body px-4 py-4">
                        <div className="text-center">
                          <h6 className="card-subtitle  mb-2">
                            Great for Gifts!
                          </h6>
                          <p className="card-text mb-3 review">
                            Uk-बाज़ार has a fantastic selection of handmade
                            items, perfect for gifting something unique and
                            rooted in Uttarakhand's culture.
                          </p>
                        </div>
                        <div className="mb-3">
                          <div className="text-center  p-2">
                            <img
                              src={image}
                              alt="Cus2"
                              className="profile-image"
                            />
                          </div>
                          <div className="align-self-center text-center profile">
                            <h4 className="card-title">Pankaj Khare</h4>
                            <p>Shop Owner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Removed the carousel control buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
