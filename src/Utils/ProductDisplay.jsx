import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";
import Sidenav from "./Sidenav";

export default function ProductDisplay() {
  const { productname } = useParams();
  const { datastate } = useContext(InventoryContext);
  return (
    <div className="main-div">
      <Sidenav />
      {datastate.products
        .filter((item) => item.name === productname)
        .map((product) => (
          <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt="" height="500px" />
            <p>Price : {product.price}</p>
            <p> Stock : {product.stock}</p>
            <p>Supplier : {product.supplier}</p>
            <p>Departmant : {product.department}</p>
            <p>SKU :{product.sku}</p>
            <p>Delivered : {product.delivered}</p>
            <p>Description : {product.description}</p>
          </div>
        ))}
    </div>
  );
}
