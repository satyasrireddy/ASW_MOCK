import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/popularProduct.json"
import ProductDetail from "../components/Products/productDetails";

export default function ProductDetails(props) {
  let item = "";

  const { productId } = useParams();

  if (productId != null) {
    item = data[productId - 1];
  }
  return item ? <ProductDetail {...item} /> : <h1>Loading ...</h1>;
}
