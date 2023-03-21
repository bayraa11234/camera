import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function () {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/product").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>Popular products</div>
        <div>
          <button>Cameras</button>
          <button>Laptops</button>
          <button>Tablets</button>
          <button>Mouse</button>
        </div>
      </div>
      <div>
        <div>
          <img src="camera.png" alt="" />
          <img src="images/wishlist.png" alt="" />
        </div>
        <h6>Camera</h6>
        <div className="d-flex justify-content-between">
          <div>
            <div>1234</div>
            <div>*****</div>
          </div>
          <div>
            <img src="images/shop.png" alt="" />
          </div>
        </div>
      </div>
      <Carousel>
        <div>
          <img src="images/camera.png" />
        </div>
        <div>
          <img src="images/camera.png" />
        </div>
        <div>
          <img src="images/camera.png" />
        </div>
      </Carousel>
    </>
  );
}
