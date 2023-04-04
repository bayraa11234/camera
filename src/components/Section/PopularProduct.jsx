import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RatingSize from "../Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const UserContext = React.createContext("");

export default function PopularProduct() {
  const notify = () => toast("Wow so easy!");

  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState(0);
  const getAllProducts = () => {
    axios.get("http://localhost:8000/product").then((res) => {
      setProduct(res.data);
    });
  };
  useEffect(() => {
    getAllProducts();
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
  function plusCart(item) {
    axios
      .post("http://localhost:8000/plusCart", { item })
      .then((res) => {
        console.log(res.data);
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function oneCart(id) {
    axios
      .get(`http://localhost:8000/plusCart/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // return (
  //   <div>
  //     {/* <button onClick={notify}>Notify!</button> */}
  //   </div>
  // );

  return (
    <>
      <UserContext.Provider value={wishlist}>
        <div
          className="d-flex justify-content-between"
          style={{ margin: "30px 0 20px 0" }}
        >
          <div
            style={{ color: "#1B5A7D", fontSize: "27px", fontWeight: "600" }}
          >
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
              onClick={notify}
            >
              Cameras
              <ToastContainer />
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
                    <Link to={"detail/" + item.id}>
                      <img
                        src={item.image}
                        alt=""
                        className="card-img-top"
                        type="button"
                        onClick={() => oneCart(item.id)}
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setWishlist(wishlist + 1);
                      }}
                    >
                      {/* {wishlist} */}
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
                      <button type="button" onClick={() => plusCart(item)}>
                        <img src="images/shop.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UserContext.Provider>
    </>
  );
}
