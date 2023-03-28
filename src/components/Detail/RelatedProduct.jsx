import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RatingSize from "../Rating";

export default function RelatedProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/relatedProduct").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <div style={{ margin: "30px 0 20px 0" }}>
        <div style={{ color: "#1B5A7D", fontSize: "27px", fontWeight: "600" }}>
          Related product
        </div>
      </div>
      <div className="row g-4 mb-5" style={{ boxSizing: "border-box" }}>
        {product.map((item) => (
          <div className="col-3">
            <div className="card p-2 related-card">
              <div className="d-flex justify-content-between">
                <div>
                  <img src={item.image} alt="" className="card-img-top" />
                </div>
                <img
                  src="images/wishlist.png"
                  alt=""
                  style={{ height: "30px" }}
                />
              </div>
              <div className="card-body" style={{ bottom: 0 }}>
                <h6 style={{ color: "#1B5A7D" }}>{item.title}</h6>
                <div className="d-flex justify-content-between">
                  <div>
                    <div style={{ margin: "10px 0 5px 0" }}>{item.price}</div>
                    <div>
                      <RatingSize />
                    </div>
                  </div>
                  <div>
                    <img src="images/shop.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
