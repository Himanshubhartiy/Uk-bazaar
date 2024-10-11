import React from "react";
import { Link } from "react-router-dom";
import roman from "./assets/roman.png";
import bhotia from "./assets/Bhotia.png";
import food from "./assets/food.png";

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="text-center">
          <h3 className="wow animate__animated animate__slideInDown">
            Categories
          </h3>
          <p className="mb-5">
            Discover our handcrafted products inspired by the beauty of
            Uttarakhand
          </p>
        </div>
        <div className="row categorie position-relative text-center">
          <div
            className="col-12 col-md-4 mb-4 wow  animate__slideInLeft"
            data-wow-duration="0.8s"
            data-wow-delay="0.1s"
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
          </div>
          <div
            className="col-12 col-md-4 mb-4 middle-image  wow animate__slideInLeft"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
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
              to={"/"}
              className="btn btn-secondary btn-lg text-decoration-none text-dark explore"
            >
              Explore <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div
            className="col-12 col-md-4 mb-4 wow animate__slideInLeft"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
