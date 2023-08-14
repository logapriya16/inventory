import React, { useContext } from "react";
import Sidenav from "../Utils/Sidenav";
import ProductList from "../Utils/ProductList";
import { InventoryContext } from "../Context/InventoryContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const { handleCategory, handleDept, handleLowStock, filter } =
    useContext(InventoryContext);
  return (
    <div className="main-div">
      <Sidenav />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "12rem",
          }}
        >
          <select
            name=""
            id=""
            onClick={(e) => handleDept(e.target.value)}
            //          onChange={() => filters()}
            defaultValue={filter.dept}
          >
            <option value="">All Departments</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
          <div>
            <input
              type="checkbox"
              //              onChange={() => filters()}
              onClick={(e) => {
                handleLowStock(e);
              }}
              id="low_stock"
            />
            <label htmlFor="">Low Stock Item</label>
          </div>
          <select
            name=""
            id=""
            //        onChange={() => filters()}
            onClick={(e) => {
              handleCategory(e);
            }}
          >
            <option value="name">name</option>
            <option value="price">price</option>
            <option value="stock">stock</option>
          </select>
          <button
            onClick={() => navigate("/newproduct")}
            style={{
              border: "0",
              backgroundColor: "blue",
              color: "white",
              padding: "1rem",
            }}
          >
            {" "}
            New
          </button>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
