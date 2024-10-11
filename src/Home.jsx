import React from "react";
import { Link } from "react-router-dom";
import rectangle from "./assets/rectangle.png";
import plant from "./assets/plant.png";
import Vector from "./assets/Vector1.png";
import Vector2 from "./assets/Vector2.png";

function Home() {
  return (
    <>
      <div className="container banner rounded-5 mt-5">
        <div className="row inner_banner">
          <div className="col-12 col-md-6 mt-5">
            <h1 className="ms-5 wow animate__slideInLeft">
              Shop Local, Shop Natural
            </h1>
            <p className="ms-5 mt-4">
              Discover a wide range of authentic Uttarakhand crafts and support
              local artisans dedicated to preserving tradition and quality.
            </p>
            <Link
              to="/products"
              className="btn btn-secondary ms-5 mt-2 mb-3 btn-lg text-decoration-none text-dark wow animate__slideInUp"
            >
              Explore Products
            </Link>
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
