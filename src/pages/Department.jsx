import React, { useContext } from "react";
import Sidenav from "../Utils/Sidenav";
import Card from "../Utils/Card";
import { useNavigate } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";

export default function Department() {
  const navigate = useNavigate();
  const { handleDept } = useContext(InventoryContext);
  return (
    <div className="main-div">
      <Sidenav />
      <div onClick={() => navigate("/products")}>
        <div className="sub-div">
          <div onClick={() => handleDept("Kitchen")}>
            <Card item="Kitchen" />
          </div>
          <div onClick={() => handleDept("Clothing")}>
            <Card item="Clothing" />
          </div>
          <div onClick={() => handleDept("Toys")}>
            <Card item="Toys" />
          </div>
        </div>
      </div>
    </div>
  );
}
