import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";

export default function CartProduct() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(11.7);
  const [subtotal, setSubtotal] = useState(price * count);
  useEffect(() => {
    setSubtotal(price * count);
  }, [count]);
  return (
    <>
      <div className="row py-5">
        <div className="col-8 ">
          <Table responsive="sm">
            <thead>
              <tr style={{ backgroundColor: "#E2F4FF" }}>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="d-flex align-items-center">
                  <img src="images/camera.png" alt="" width="50%" />
                  <div>
                    <h5 style={{ color: "#003F62" }}>Play game</h5>
                    <div>Color: Green</div>
                    <div>Size: 30</div>
                  </div>
                </td>
                <td>${price}</td>
                <td>
                  <button
                    className="btn btn-secondary "
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <button className="mx-3">{count}</button>
                  <button
                    className="btn btn-secondary "
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>${subtotal}</td>
              </tr>
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-between my-4">
            <button
              type="button"
              class="btn rounded-pill py-2"
              style={{ backgroundColor: "#EDA415", width: "40%" }}
            >
              Continue shopping
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary rounded-pill w-25"
            >
              Update Cart
            </button>
            <button
              type="button"
              class="btn btn-outline-danger rounded-pill w-25"
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h5
              style={{
                textAlign: "center",
                backgroundColor: "#E2F4FF",
                padding: "7px",
              }}
            >
              Card total
            </h5>
            <div className="card-body px-4 ">
              <div className="d-flex justify-content-between border-bottom">
                <h5>Subtotal</h5>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex align-items-center py-3 border-bottom">
                <input
                  type="text"
                  className="w-100 py-2 rounded-pill border px-3"
                  style={{ position: "relative" }}
                  placeholder="Enter coupon code"
                ></input>
                <button
                  style={{
                    position: "absolute",
                    right: "40px",
                    color: "#003F62",
                  }}
                >
                  Apply
                </button>
              </div>
              <div>
                <select
                  className="form-select rounded-pill border my-3 py-2"
                  aria-label="Default select example"
                >
                  <option selected>Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h6>Total amount</h6> <span>${subtotal}</span>
              </div>
              <button
                type="button"
                class="btn rounded-pill py-2 w-100"
                style={{ backgroundColor: "#EDA415" }}
              >
                Proceed to ckeckout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}