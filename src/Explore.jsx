import React from "react";
import roman from "./assets/roman.png";
import bhotia from "./assets/Bhotia.png";
import food from "./assets/food.png";
import jewelry from "./assets/women.png";
import folk from "./assets/folk.png";
import temple from "./assets/templepng.png";

function Explore() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3 className="mb-5">Categories</h3>
      </div>

      <div className="row position-relative text-center">
        <div className="col-12 col-md-4 mb-4">
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

        <div className="col-12 col-md-4 mb-4">
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
        </div>

        <div className="col-12 col-md-4 mb-4">
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

        {/* You can repeat the same card structure as needed */}
        <div className="col-12 col-md-4 mb-4">
          <img
            src={temple}
            alt="Local Foods"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Spiritual Items</h5>
          <p className="px-3">
            Taste the authentic flavors of Uttarakhand with our selection of
            local delicacies.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <img
            src={jewelry}
            alt="Local Foods"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Cultural Jewelry</h5>
          <p className="px-3">
            Taste the authentic flavors of Uttarakhand with our selection of
            local delicacies.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <img
            src={folk}
            alt="Local Foods"
            className="img-fluid Handicrafts rounded-3"
          />
          <h5 className="mt-3">Traditional Instruments</h5>
          <p className="px-3">
            Taste the authentic flavors of Uttarakhand with our selection of
            local delicacies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
