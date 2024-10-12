import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";

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
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active circle-button"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  className="circle-button"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  className="circle-button"
                  aria-label="Slide 3"
                ></button>
              </div>

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
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image1} alt="cus1" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Ramesh Pandey</h4>
                            <p>Local Artisan</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Amazing Craftsmanship!
                          </h6>
                          <p className="card-text mb-3">
                            The traditional Uttarakhand crafts sold here are of
                            excellent quality. I love supporting local artisans
                            through Uk-बाज़ार!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image2} alt="Cus2" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Suhani Rawat</h4>
                            <p>Shop Owner</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Great for Gifts!
                          </h6>
                          <p className="card-text mb-3">
                            Uk-बाज़ार has a fantastic selection of handmade
                            items, perfect for gifting something unique and
                            rooted in Uttarakhand's culture.
                          </p>
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
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image1} alt="cus1" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Ramesh Pandey</h4>
                            <p>Local Artisan</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Amazing Craftsmanship!
                          </h6>
                          <p className="card-text mb-3">
                            The traditional Uttarakhand crafts sold here are of
                            excellent quality. I love supporting local artisans
                            through Uk-बाज़ार!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image2} alt="Cus2" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Suhani Rawat</h4>
                            <p>Shop Owner</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Great for Gifts!
                          </h6>
                          <p className="card-text mb-3">
                            Uk-बाज़ार has a fantastic selection of handmade
                            items, perfect for gifting something unique and
                            rooted in Uttarakhand's culture.
                          </p>
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
                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image1} alt="cus1" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Ramesh Pandey</h4>
                            <p>Local Artisan</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Amazing Craftsmanship!
                          </h6>
                          <p className="card-text mb-3">
                            The traditional Uttarakhand crafts sold here are of
                            excellent quality. I love supporting local artisans
                            through Uk-बाज़ार!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="review-card col-12 col-md-6 col-lg-4 border rounded-4 mb-3 me-3">
                      <div className="card-body px-4 py-5">
                        <div className="row mb-3">
                          <div className="col-3">
                            <img src={image2} alt="Cus2" />
                          </div>
                          <div className="col-9 align-self-center profile">
                            <h4 className="card-title">Suhani Rawat</h4>
                            <p>Shop Owner</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="card-subtitle mb-2">
                            Great for Gifts!
                          </h6>
                          <p className="card-text mb-3">
                            Uk-बाज़ार has a fantastic selection of handmade
                            items, perfect for gifting something unique and
                            rooted in Uttarakhand's culture.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
