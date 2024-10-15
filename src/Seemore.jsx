import React from "react";
import sial from "./assets/Sial.png";
import iyuu from "./assets/iyuu.png";
import cup from "./assets/cup.png";
import kettle from "./assets/kettle.png";
import hudka from "./assets/hudka.png";
import basket from "./assets/Basketmaker.png";
import mug from "./assets/mug.png";

function Card() {
  return (
    <div className="container-fluid" id="product__section">
      <div className="row product_section">
        <div className="col-12">
          <h2 className="text-center">Best Selling Products</h2>
        </div>

        {/* Card rows */}
        <div className="col-12 col-md-10 offset-md-1">
          <div className="row mt-4">
            {[
              {
                img: sial,
                title: "Rambaans Natural Fiber Lantern",
                price: "₹900.00",
              },
              {
                img: iyuu,
                title: "Rambaans Natural Fiber Bag",
                price: "₹400.00",
              },
              {
                img: cup,
                title: "Wooden Crafts Cup",
                price: "₹500.00",
              },
              {
                img: kettle,
                title: "Aipan Art Kettle/Ketli",
                price: "₹1000.00",
              },
            ].map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="product-card">
                  <img
                    src={product.img}
                    className="card-img-top best-product rounded-3"
                    alt={product.title}
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            {[
              {
                img: sial,
                title: "Rambaans Natural Fiber Lantern",
                price: "₹900.00",
              },
              {
                img: basket,
                title: "RINGAAL BAMBOO BASKETRY ",
                price: "₹550.00",
              },
              {
                img: cup,
                title: "Wooden Crafts Cup",
                price: "₹500.00",
              },
              {
                img: sial,
                title: "Rambaans Natural Fiber Lantern",
                price: "₹900.00",
              },
            ].map((product, index) => (
              <div key={index + 4} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="product-card">
                  <img
                    src={product.img}
                    className="card-img-top best-product rounded-3"
                    alt={product.title}
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            {[
              {
                img: hudka,
                title: "Hudka (हुड़का) – The Traditional Musical Instrument",
                price: "₹2500.00",
              },

              {
                img: mug,
                title: "Aipan Art From Uttarakhand, India. Coffee Mug",
                price: "₹1000.00",
              },
              {
                img: cup,
                title: "Wooden Crafts Cup",
                price: "₹500.00",
              },
              {
                img: sial,
                title: "Rambaans Natural Fiber Lantern",
                price: "₹900.00",
              },
            ].map((product, index) => (
              <div key={index + 8} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="product-card">
                  <img
                    src={product.img}
                    className="card-img-top best-product rounded-3"
                    alt={product.title}
                  />
                  <div className="card-body mt-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
