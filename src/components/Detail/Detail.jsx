import React from "react";
// import Header from "../Header/Header";
import { MainLayout } from "../MainLayout";
import DetailProduct from "./DetailProduct";

export default function Detail() {
  return (
    <MainLayout>
      <div className="container">
        <DetailProduct />
      </div>
    </MainLayout>
  );
}
