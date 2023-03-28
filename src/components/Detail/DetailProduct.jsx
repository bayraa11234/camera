import React from "react";
import { useState } from "react";
import RatingSize from "../Rating";
import { SiGoogle, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import RelatedProduct from "./RelatedProduct";

export default function DetailProduct() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className=" row d-flex">
        <div className="col-6">
          <img src="./detailProduct/bidPlay.png" alt="" className="img-fluid" />
          <div className="d-flex my-3 gap-2 ">
            <img src="./detailProduct/Play.png" alt="" className="w-50" />
            <img src="./detailProduct/Play.png" alt="" className="w-50" />
          </div>
        </div>
        <div className="col-6">
          <div style={{ borderBottom: "1px solid #5D5D5D" }}>
            <h2>Play game</h2>
            <div
              style={{
                margin: "0.5em 0 0.7em 0",
                fontSize: "20px",
                fontWeight: "600",
                color: "#4A4A4A",
              }}
            >
              $11,70
            </div>
            <div className="d-flex">
              <h4>
                <RatingSize />
              </h4>
              <span className="mx-4">No reviews</span>
            </div>
            <div className="d-flex" style={{ margin: "0.7em 0 0.3em 0" }}>
              <h5>Availabity: </h5>
              <span style={{ color: "#30BD57", marginLeft: "0.5em" }}>
                + in stock
              </span>
            </div>
            <p>Hurry up! only 34 product left in stock! </p>
          </div>
          <div style={{ borderBottom: "1px solid #5D5D5D" }}>
            <div
              className="d-flex "
              style={{ gap: 15, margin: "1rem 0 0.5em 0" }}
            >
              Color:{" "}
              <span>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    style={{
                      backgroundColor: "#30BD57",
                      boxShadow: " 1px -1px 33px 10px rgba(48,189,87,0.73)",
                    }}
                  />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    style={{
                      backgroundColor: "#565656",
                      boxShadow: " 1px -1px 33px 10px rgba(86,86,86,1)",
                    }}
                  />
                </div>
              </span>
            </div>
            <div className="d-flex align-items-center my-3">
              Size:{" "}
              <div style={{ display: "flex", wrap: "no-wrap" }}>
                <button type="button" className="btn btn-secondary mx-2">
                  30
                </button>
                <button type="button" className="btn btn-secondary ">
                  56
                </button>
                <button type="button" className="btn btn-secondary mx-2">
                  42
                </button>
                <button className="btn btn-secondary ">48</button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              Quality:{" "}
              <div className="d-flex align-items-center border border-dark rounded-3">
                <button
                  className="btn btn-secondary "
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <div className="mx-3">{count}</div>
                <button
                  className="btn btn-secondary "
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="d-flex gap-3 my-4 w-100">
              <button className="btn bg-warning" style={{ width: "30%" }}>
                Add to card
              </button>
              <button className=" btn bg-warning" style={{ width: "30%" }}>
                Buy it now
              </button>

              <img
                src="./detailProduct/favourite.png"
                alt=""
                style={{ maxWidth: "10%" }}
              />
            </div>
          </div>
          <div>
            <div className="mt-3">Sku: &nbsp; &nbsp;01133-9-9</div>
            <div style={{ margin: "1rem 0 1rem 0" }}>
              Category: &nbsp; &nbsp;20% off, 49% off Alex remote
            </div>
            <div className="d-flex">
              Share: &nbsp; &nbsp;{" "}
              <div
                className="d-flex align-items-center justify-content-evenly"
                style={{ width: "150px" }}
              >
                <SiGoogle />
                <SiFacebook />
                <SiInstagram />
                <SiTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5 gap-4">
        <button
          type="button"
          className="btn btn-outline-dark px-3 rounded-pill"
        >
          Description
        </button>
        <button
          type="button"
          className="btn btn-outline-light px-4 rounded-pill"
          style={{ backgroundColor: "#003F62" }}
        >
          Reviews
        </button>
      </div>
      <div>
        <RelatedProduct />
      </div>
    </>
  );
}
