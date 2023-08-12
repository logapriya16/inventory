import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import Products from "./pages/Products";
import NewProduct from "./components/NewProduct";
import ProductDisplay from "./Utils/ProductDisplay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Department />} path="/dept" />
        <Route element={<Products />} path="/products" />
        <Route element={<NewProduct />} path="/newproduct" />
        <Route element={<ProductDisplay/>} path="/product/:productname"/>
      </Routes>
    </div>
  );
}

export default App;
