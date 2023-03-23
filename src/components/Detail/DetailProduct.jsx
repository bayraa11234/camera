import React from "react";
import { useState } from "react";

export default function DetailProduct() {
  const [count, setCount] = useState(1);
  return (
    <div className=" row d-flex">
      <div className="col-6">
        <img src="./detailProduct/bidPlay.png" alt="" className="img-fluid" />
        <div className="d-flex my-3 gap-2 ">
          <img src="./detailProduct/Play.png" alt="" className="w-50" />
          <img src="./detailProduct/Play.png" alt="" className="w-50" />
        </div>
      </div>
      <div className="col-6">
        <div style={{ borderBottom: "1px solid black" }}>
          <h2>Play game</h2>
          <div>$11,70</div>
          <div className="d-flex">
            <h4>* * * * * </h4>
            <span>No reviews</span>
          </div>
          <div className="d-flex">
            <h5>Availabity: </h5>
            <span style={{ color: "#30BD57" }}>+ in stock</span>
          </div>
          <p>Hurry up! only 34 product left in stock! </p>
        </div>
        <div>
          <div className="d-flex " style={{ gap: 15 }}>
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
            <div>
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
          <div className="d-flex gap-3 my-3">
            <button className="btn bg-warning">Add to card</button>
            <button className=" btn bg-warning">Buy it now</button>

            <img
              src="./detailProduct/favourite.png"
              alt=""
              style={{ maxWidth: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
