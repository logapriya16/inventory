import React, { createContext, useEffect, useReducer, useState } from "react";
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
  const [filteredProducts, setFilteredProducts] = useState(datastate.products);
  const [filter, setfilter] = useState({
    dept: "",
    low_stock: false,
    sortBY: "",
  });
  const SetDatas = () => {
    let temp1 = 0;
    datastate.products.map((item) => (temp1 += item.stock));
    let temp2 = 0;
    datastate.products.map((item) => (temp2 += item.delivered));
    let temp3 = 0;
    datastate.products
      .filter((product) => product.stock <= 10)
      .map((item) => (temp3 += 1));

    //console.log(temp3);
    dataDispatch({
      type: "set_Tot_Stock",
      payload: temp1,
    });
    dataDispatch({ type: "set_Delivered", payload: temp2 });
    dataDispatch({ type: "set_low_Stock", payload: temp3 });
  };
  useEffect(() => {
    SetDatas();
  }, []);
  console.log(filter);
  const filters = (filter) => {
    const temp = datastate.products;
    //    console.log(temp)
    const temp2 =
      filter.sortBY.length > 0 ? (
        <div>
          {filter.sortBY.name.length > 0
            ? temp.sort((a, b) => a.name - b.name)
            : temp}
            {filter.sortBY.price>0?}
        </div>
      ) : (
        temp3
      );
    const temp3 =
      filter.low_stock === true
        ? temp2.filter((item) => item.stock <= 10)
        : temp4;

    const temp4 =
      filter.dept.length > 0
        ? temp3.filter((item) => item.department === filter.dept)
        : temp3;

    setFilteredProducts(temp2);

    console.log(temp2);
  };
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
        filters,
        setfilter,
        filter,
        filteredProducts,
        AddNewProduct,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
