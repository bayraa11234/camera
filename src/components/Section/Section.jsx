import React from "react";
import PublicImage from "../../utils/PublicImage";

export default function Section() {
  return (
    <>
      <div className="d-flex container justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <h1
              className="fw-bold"
              style={{ color: "#1B5A7D", marginBottom: "30px" }}
            >
              Canon camera
            </h1>
            <div className="d-flex gap-5">
              <button className="button btn bg-warning">Shop now</button>
              <button className="button btn btn-outline-primary">
                View more
              </button>
            </div>
          </div>
        </div>
        <div>
          <PublicImage path="/Camera.png" />
        </div>
      </div>
    </>
  );
}
