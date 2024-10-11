import React from "react";
import { Link } from "react-router-dom";
import sial from "./assets/Sial.png";
import iyuu from "./assets/iyuu.png";
import cup from "./assets/cup.png";

function Card() {
  return (
    <>
      <div className="container-fluid" id="product__section">
        <div className="row product_section">
          <div className="mt-5 products col-12 col-md-4 col-lg-3">
            <h3 className="selling wow animate__slideInLeft">
              Best Selling Products
            </h3>
            <p>
              Explore our unique collection of Uttarakhand crafts, handpicked
              for you
            </p>
            <Link
              to={`/`}
              className="btn btn-primary btn-lg text-decoration-none text-dark wow animate__slideInUp"
            >
              See more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row mt-4">
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="product-card">
                  <img
                    src={sial}
                    className="card-img-top best-product rounded-3 wow  animate__flipInY"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.1s"
                    alt="..."
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">
                      Rambaans Natural Fiber lantern
                    </h5>
                    <p className="card-text">₹900.00</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="product-card">
                  <img
                    src={iyuu}
                    className="card-img-top best-product rounded-3 wow animate__flipInY"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                    alt="..."
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title"> Rambaans Natural Fiber bag</h5>
                    <p className="card-text">₹400.00</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="product-card">
                  <img
                    src={cup}
                    className="card-img-top best-product rounded-3 wow animate__flipInY"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                    alt="..."
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">Wooden Crafts cup</h5>
                    <p className="card-text">₹500.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
