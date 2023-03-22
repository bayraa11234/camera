import React from "react";

export default function Free() {
  return (
    <div
      style={{
        backgroundColor: "#E2F4FF",
        borderRadius: "10px",
        margin: "30px 0 50px 0",
      }}
    >
      <div
        className="d-flex justify-content-evenly align-items-center"
        style={{ height: "130px" }}
      >
        <div className="d-flex align-items-center justify-content-between ">
          <img src="logos/box-tick.png" alt="" />
          <div>
            <h5 style={{ color: "#003F62" }}>Free delivery</h5>
            <div>on order above $50,00</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between ">
          <img src="logos/crown.png" alt="" />
          <div>
            <h5 style={{ color: "#003F62" }}>Free delivery</h5>
            <div>on order above $50,00</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <img src="logos/shield-security.png" alt="" />
          <div>
            <h5 style={{ color: "#003F62" }}>Free delivery</h5>
            <div>on order above $50,00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
