import React, { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const { datastate, filters, filteredProducts } = useContext(InventoryContext);
  const navigate = useNavigate();
  // console.log(datastate);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => (
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
