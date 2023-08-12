import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";

export default function NewProduct() {
  const navigate = useNavigate();
  const { AddNewProduct } = useContext(InventoryContext);
  return (
    <form
      onSubmit={(e) => {
        AddNewProduct(e);
        navigate("/products");
      }}
    >
      <h1>Add New Product</h1>
      <label>
        Department :
        <select id="dept">
          <option value="Toys">Toys</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
        </select>
      </label>
      <br />
      <label>
        Name :
        <input type="text" id="name" />
      </label>
      <br />
      <label>
        Description :
        <input type="text" id="desc" />
      </label>
      <br />
      <label>
        Price :
        <input type="number" id="price" />
      </label>
      <br />
      <label>
        Stock :
        <input type="number" id="stock" />
      </label>
      <br />
      <label>
        SKU :
        <input type="text" id="sku" />
      </label>
      <br />
      <label>
        Supplier :
        <input type="text" name="" id="supplier" />
      </label>
      <br />
      <label>
        Delivered :
        <input type="number" id="delivered" />
      </label>
      <br />
      <label>
        Image URL :
        <input defaultValue="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" type="text" id="img" />
      </label>
      <button type="submit">Add Product</button>
      <button type="reset" style={{ display: "none" }} id="reset"></button>
    </form>
  );
}
