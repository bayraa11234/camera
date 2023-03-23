import React from "react";

export default function DetailProduct() {
  return (
    <div className="d-flex" style={{ gap: 15 }}>
      <div>
        <img src="./detailProduct/bidPlay.png" alt="" />
        <div className="d-flex my-3" style={{ gap: 15 }}>
          <img src="./detailProduct/Play.png" alt="" />
          <img src="./detailProduct/Play.png" alt="" />
        </div>
      </div>
      <div>
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
        </div>
      </div>
    </div>
  );
}
