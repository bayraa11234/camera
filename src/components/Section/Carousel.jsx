import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from "react-elastic-carousel";
// import { Carousel } from "react-responsive-carousel";

export default function Carousell() {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <div className="card w-25">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <img src="speakerCopy.png" alt="" />
            </div>
            <div className="">
              <h4>speaker</h4>
              <p>items 6</p>
            </div>
          </div>
        </div>
        <div className="card w-25">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <img src="cameraCopy.png" alt="" />
            </div>
            <div className="">
              <h4>speaker</h4>
              <p>items 6</p>
            </div>
          </div>
        </div>
        <div className="card w-25">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <img src="computer.png" alt="" />
            </div>
            <div className="">
              <h4>speaker</h4>
              <p>items 6</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel>
        <div className="slide">
          <div className="d-flex">
            <img src="camera.png" className="slide-picture" alt="" />
            <img src="speaker.png" className="slide-picture" alt="" />
          </div>
        </div>
        <div className="slide">
          <img src="speaker.png" className="slide-picture" alt="" />
          <img src="camera.png" className="slide-picture" alt="" />
        </div>
        <div className="slide">
          <img src="camera.png" className="slide-picture" alt="" />
          <img src="speaker.png" className="slide-picture" alt="" />
        </div>
      </Carousel> */}
    </>
  );
}
