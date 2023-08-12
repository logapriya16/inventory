import React, { useContext } from "react";
import Sidenav from "../Utils/Sidenav";
import ProductList from "../Utils/ProductList";
import { InventoryContext } from "../Context/InventoryContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const { filters, setfilter } = useContext(InventoryContext);
  return (
    <div className="main-div">
      <Sidenav />
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <select
            name=""
            id=""
            onClick={(e) =>
              setfilter((prev) => ({ ...prev, dept: e.target.value }))
            }
          >
            <option value="">All Departments</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
          <div>
            <input
              type="checkbox"
              onClick={(e) => {
                if (e.target.checked) {
                  setfilter((prev) => ({ ...prev, low_stock: true }));
                } else {
                  setfilter((prev) => ({ ...prev, low_stock: false }));
                }
              }}
            />
            <label htmlFor="">Low Stock Item</label>
          </div>
          <select
            name=""
            id=""
            onClick={(e) =>
              setfilter((prev) => ({ ...prev, sortBY: e.target.value }))
            }
          >
            <option value="name">name</option>
            <option value="price">price</option>
            <option value="stock">stock</option>
          </select>
          <button onClick={() => navigate("/newproduct")}> New</button>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
