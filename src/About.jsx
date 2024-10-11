import React from "react";
import large from "./assets/large.png";
import fast from "./assets/fast.png";
import free from "./assets/free.png";

function About() {
  return (
    <>
      <div className="container about" id="about__section">
        <div className="text-center mb-5">
          <h3 className=" wow animate__slideInDown py-5">About Us</h3>
          <p>
            Explore the rich culture of Uttarakhand through our unique products.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <img
              src={large}
              className="Large mb-4 img-fluid wow animate__zoomIn"
              data-wow-duration="0.8s"
              data-wow-delay="0.1s"
              alt="Large assortment of products"
            />
            <h4 className="mb-3">Diverse Collection</h4>
            <p>
              We offer a wide range of authentic crafts, clothes, foods, and
              instruments that celebrate Uttarakhand's heritage.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <img
              src={free}
              className="Large mb-4 img-fluid  wow animate__zoomIn"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
              alt="Fast and free delivery"
            />
            <h4 className="mb-3">Fast & Free Delivery</h4>
            <p>
              Enjoy quick delivery within 4 days or less, with no hidden fees on
              all orders.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <img
              src={fast}
              className="Large mb-4 img-fluid  wow animate__zoomIn"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
              alt="24/7 customer support"
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
}

export default About;
