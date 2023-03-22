// import axios from "axios";
import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

export default function SpecialProduct() {
  //   const products = [
  //     {
  //       image: "JBL.png",
  //       title: "JBL bar 2.1 deep bass $11,70",
  //       price: "$11.70",
  //       rating: "*****",
  //     },
  //     {
  //       image: "productPlay.png",
  //       title: "Play game",
  //       price: "$11.70",
  //       rating: "*****",
  //     },
  //     {
  //       image: "computer.png",
  //       title: "Play game",
  //       price: "$11.70",
  //       rating: "*****",
  //     },
  //   ];
  //   const [specialProduct, setSpecialProduct] = useState("");
  //   useEffect(() => {
  //     axios.get("http://localhost:8000/product").then((res) => {
  //       setSpecialProduct(res.data);
  //     });
  //   }, []);
  return (
    <div>
      <div className="row ">
        <div className="col-8 ">
          <div className="card">
            <div className="d-flex justify-content-between align-items-center">
              <img src="/JBL.png" alt="" />
              <div className="card-body">
                <h5 style={{ color: "#1B5A7D" }}>
                  JBL bar 2.1 deep bass $11,70
                </h5>
                <div className="my-3">$11.70</div>
                <div>****</div>
                <button className="btn" style={{ backgroundColor: "#87BCD9" }}>
                  Add to card{" "}
                  <img
                    src="images/shop.png"
                    alt=""
                    style={{ maxWidth: "20px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-50 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <img src="productPlay.png" alt="" style={{ maxWidth: "200px" }} />
              <div className="card-body">
                <h6 style={{ color: "#1B5A7D" }}>Play game</h6>
                <div>$11.70</div>
                <div>****</div>
              </div>
            </div>
          </div>
          <div className="card h-50 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <img src="computer.png" alt="" />
              <div className="card-body">
                <h6 style={{ color: "#1B5A7D" }}>Play game</h6>
                <div>$11.70</div>
                <div>****</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
