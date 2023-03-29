import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RatingSize from "../Rating";

export default function PopularProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/product").then((res) => {
      setProduct(res.data);
    });
  }, []);
  // function filterCars(res, filter) {
  //   switch (filter) {
  //     case "Toyota":
  //       return res.filter((car) => car.brand == "Toyota");
  //     case "Lexus":
  //       return res.filter((car) => car.brand == "Lexus");
  //     default:
  //       return res;
  //   }
  // }
  // function deleteCar(id) {
  //   fetch("http://localhost:3333/api/cars", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //     }),
  //   });
  //   window.location.reload();
  // }
  function plusCart(id) {
    axios.post("http://localhost:8000/plusCart").then((res) => {});
  }
  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{ margin: "30px 0 20px 0" }}
      >
        <div style={{ color: "#1B5A7D", fontSize: "27px", fontWeight: "600" }}>
          Popular products
        </div>
        <div>
          <button
            className=" btn btn-outline-secondary"
            style={{
              color: "#1B5A7D",
              marginLeft: "0.5em",
              borderRadius: "50px",
            }}
          >
            Cameras
          </button>
          <button
            className="btn btn-outline-secondary"
            style={{
              color: "#1B5A7D",
              marginLeft: "0.5em",
              borderRadius: "50px",
            }}
          >
            Laptops
          </button>
          <button
            className="btn btn-outline-secondary"
            style={{
              color: "#1B5A7D",
              marginLeft: "0.5em",
              borderRadius: "50px",
            }}
          >
            Tablets
          </button>
          <button
            className="btn btn-outline-secondary"
            style={{
              color: "#1B5A7D",
              marginLeft: "0.5em",
              borderRadius: "50px",
            }}
          >
            Mouse
          </button>
        </div>
      </div>
      <div className="row g-4" style={{ boxSizing: "border-box" }}>
        {product.map((item) => (
          <div className="col-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between">
                <div>
                  <img src={item.image} alt="" className="card-img-top" />
                </div>
                <div>
                  <button type="button" onClick={plusCart}>
                    <img
                      src="images/wishlist.png"
                      alt=""
                      style={{ height: "30px" }}
                    />
                  </button>
                </div>
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
                    <button>
                      <img src="images/shop.png" alt="" />
                    </button>
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
