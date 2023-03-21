import React from "react";
import PublicImage from "../../utils/PublicImage";
import Carousel from "react-bootstrap/Carousel";

const items = [
  { path: "/Camera.png", title: "Canon camera" },
  { path: "/Camera.png", title: "Macbook m1" },
  { path: "/Camera.png", title: "Phone" },
];

export default function Section() {
  return (
    <>
      <Carousel variant="dark">
        {items.map((item) => (
          <Carousel.Item>
            <div className="d-flex container justify-content-evenly">
              <div className="d-flex align-items-center">
                <div>
                  <h1
                    className="fw-bold"
                    style={{ color: "#1B5A7D", marginBottom: "30px" }}
                  >
                    {item.title}
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
                <PublicImage path={item.path} />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
