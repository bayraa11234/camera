import React from "react";
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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Header() {
  const [navbar, setNavbar] = useState([]);
  const [products, setProducts] = useState([]);
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
  // console.log(navbar[0].popular[0]);
  return (
    <>
      {/* hamgiin deed taliin heseg */}
      <div className="container">
        <div className="d-flex justify-content-between Header-text py-3">
          <div className="header-contact">
            Need help? Call us: <a href="">(+98) 0234 456 789</a>
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
              <PublicImage path="/logo1.png" />
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
            </div>
            <div>
              <Shopping />
            </div>
          </div>
        </div>
      </div>
      {/* navbariin heseg */}
      <div className="w-100 bg-light">
        <div className="container">
          <ul className="d-flex gap-4 align-items-center navbar-ul">
            {navbar.map((nav) => {
              return <li>{nav.li}</li>;
            })}
            {/* {[
              "Primary",
              "Secondary",
              "Success",
              "Info",
              "Warning",
              "Danger",
            ].map((variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ))} */}
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
      {console.log(products[0])}
      {products.map((product) => {
        return <h1>{product.name}</h1>;
      })}
    </>
  );
}
