import React, { createContext,  useReducer, useState } from "react";
import { inventoryData } from "../data";
import { datareducer } from "../reducers/datareducer";

export const InventoryContext = createContext();

export default function InventoryContextProvider({ children }) {
  const datainitial = {
    products: inventoryData,
    totalStock: 0,
    totalDelivered: 0,
    lowstock: 0,
  };
  const [datastate, dataDispatch] = useReducer(datareducer, datainitial);
  const [filter, setfilter] = useState({
    dept: "",
    low_stock: false,
    sortBY: "",
  });
  const handleDept = (e) => {
    setfilter((prev) => ({ ...prev, dept: e }));
  };
  const handleLowStock = (e) => {
    if (e.target.checked) {
      setfilter((prev) => ({ ...prev, low_stock: !filter.low_stock }));
    } else {
      setfilter((prev) => ({ ...prev, low_stock: false }));
    }
  };
  const handleCategory = (e) => {
    setfilter((prev) => ({ ...prev, sortBY: e.target.value }));
  };
  console.log(filter);
  const deptSort =
    filter.dept.length > 0
      ? datastate.products.filter((item) => item.department === filter.dept)
      : datastate.products;
  const lowStockSort =
    filter.low_stock === true
      ? deptSort.filter((item) => item.stock <= 10)
      : deptSort;
  const categorySort =
    filter.sortBY.length > 0
      ? filter.sortBY === "name"
        ? lowStockSort.sort((a, b) => a.name - b.name)
        : filter.sortBY === "price"
        ? lowStockSort.sort((a, b) => a.price - b.price)
        : filter.sortBY === "stock"
        ? lowStockSort.sort((a, b) => a.stock - b.stock)
        : lowStockSort
      : lowStockSort;

  const AddNewProduct = (e) => {
    e.preventDefault();
    const resetter = e.target.elements.reset;
    const newProduct = {
      department: e.target.elements.dept.value,
      name: e.target.elements.name.value,
      description: e.target.elements.desc.value,
      price: e.target.elements.price.value,
      stock: e.target.elements.stock.value,
      sku: e.target.elements.sku.value,
      supplier: e.target.elements.supplier.value,
      delivered: e.target.elements.delivered.value,
      imageUrl: e.target.elements.img.value,
    };
    const temp = [...datastate.products, newProduct];
    dataDispatch({ type: "set_data", payload: temp });
    //console.log(temp);
    resetter.click();
  };
  return (
    <InventoryContext.Provider
      value={{
        datastate,
        setfilter,
        filter,
        AddNewProduct,
        handleCategory,
        handleDept,
        handleLowStock,
        categorySort,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
