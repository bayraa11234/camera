import React, { useContext } from "react";
import Favorite from "../../little-photos/Favorite";
import Location from "../../little-photos/Location";
import Truck from "../../little-photos/Truck";
import User from "../../little-photos/User";
import Shopping from "../../little-photos/Shopping";
import "../../styles/App.css";
import PublicImage from "../../utils/PublicImage";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "../Section/PopularProduct";

export default function Header() {
  const [navbar, setNavbar] = useState([]);
  const [products, setProducts] = useState([]);
  const [plusCart, setPlusCart] = useState([]);
  const { wishlist } = useContext(UserContext);

  useEffect(() => {
    axios.get("http://localhost:8000/navbar").then((res) => {
      setNavbar(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/plusCart").then((res) => {
      setPlusCart(res.data);
    });
  }, []);
  console.log(`wishlist:${wishlist}`);
  return (
    <>
      {/* hamgiin deed taliin heseg */}
      <UserContext.Provider value={wishlist}>
        <div className="container">
          <div className="d-flex justify-content-between Header-text py-3">
            <div className="header-contact">
              Need help? Call us: (+98) 0234 456 789
            </div>
            <div className="header-location d-flex gap-5">
              <div className="d-flex align-items-center">
                <Location /> &nbsp; Our store
              </div>
              <div className="d-flex align-items-center">
                <Truck /> &nbsp; Track your order
              </div>
            </div>
          </div>
        </div>
        {/* search hesegtei headeriin heseg */}
        <div className="w-100  Header-bg ">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-5">
              <div className=" Header-electron">
                <Link to="/">
                  <PublicImage path="/logo1.png" />
                </Link>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search any things"
                  className="Header-input"
                />
                <button className="search-btn btn btn-warning" type="submit">
                  Search
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-evenly gap-4">
              <div style={{ color: "white" }}>
                <Link to="/Signin" style={{ color: "#fff" }}>
                  Sign in
                </Link>
                &nbsp;
                <User />
                &nbsp;{" "}
                <Link to="/signout" style={{ color: "#fff" }}>
                  Sign out
                </Link>
              </div>
              <div>
                <Favorite />
                <span
                  style={{
                    position: "relative",
                    backgroundColor: "#EDA415",
                    borderRadius: "50%",
                    padding: "1px 3px",
                    fontSize: "12px",
                    color: "#fff",
                  }}
                >
                  {wishlist}
                </span>
              </div>
              <div>
                <Link to="/cart" style={{ color: "#fff" }}>
                  <Shopping />
                  <span
                    style={{
                      position: "relative",
                      backgroundColor: "#EDA415",
                      borderRadius: "50%",
                      padding: "1px 3px",
                      fontSize: "12px",
                      color: "#fff",
                    }}
                  >
                    {plusCart.length}
                  </span>
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* navbariin heseg */}
        <div className="w-100 bg-light">
          <div className="container">
            <ul className="d-flex gap-4 align-items-center navbar-ul">
              {navbar.map((nav) => {
                return (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                          border: "none",
                          backgroundColor: "inherit",
                          color: "#000",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>{nav.li}</div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                );
              })}

              <div
                style={{
                  color: "#003f62",
                  fontWeight: "600",
                  marginLeft: "100px",
                }}
              >
                30 Days Free Return
              </div>
            </ul>
          </div>
        </div>
        {/* {console.log(products[0])} */}
        {products.map((product) => {
          return <h1>{product.name}</h1>;
        })}
      </UserContext.Provider>
    </>
  );
}
