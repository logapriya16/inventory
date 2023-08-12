import React, { useContext } from "react";
import Sidenav from "../Utils/Sidenav";
import { InventoryContext } from "../Context/InventoryContext";
import Card from "../Utils/Card";

export default function Dashboard() {
  const { datastate } = useContext(InventoryContext);
  //console.log(datastate);
  return (
    <div className="main-div">
      <Sidenav />
      <>
        <Card item={datastate.totalStock} name={"Total Stock"} />
        <Card item={datastate.totalDelivered} name={"Total Delivered"} />
        <Card item={datastate.lowstock} name={"Low Stock"} />
      </>
    </div>
  );
}
