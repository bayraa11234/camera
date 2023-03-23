import React from "react";
import Header from "../Header/Header";
import DetailProduct from "./DetailProduct";

export default function Detail() {
  return (
    <div>
      <Header />
      <div className="container">
        <DetailProduct />
      </div>
    </div>
  );
}
