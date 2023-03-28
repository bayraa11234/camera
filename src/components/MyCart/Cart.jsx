import React from "react";
import { MainLayout } from "../MainLayout";
import CartProduct from "./CartProduct";

export default function Cart() {
  return (
    <>
      <MainLayout>
        <div className="container">
          <CartProduct />
        </div>
      </MainLayout>
    </>
  );
}
