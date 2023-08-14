import React, { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const {  categorySort } = useContext(InventoryContext);
  const navigate = useNavigate();
//console.log(datastate,);
  return (
    <div>
      <table style={{marginLeft:"12rem"}} border="2px solid black">
        <thead>
          <tr style={{background:"lightorange"}}>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {categorySort.map((item) => (
            <tr>
              <td>
                <img
                  src={item.imageUrl}
                  alt=""
                  height="200px"
                  onClick={() => navigate(`/product/${item.name}`)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
