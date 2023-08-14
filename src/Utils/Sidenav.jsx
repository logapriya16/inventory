import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidenav() {
  const navigate = useNavigate();
  return (
    <div className="side-nav">
      <ul type="none">
        <li className="nav-items" onClick={() => navigate("/")}>
          Dashboard
        </li>
        <li className="nav-items" onClick={() => navigate("/dept")}>
          Department
        </li>
        <li className="nav-items" onClick={() => navigate("/products")}>
          Products
        </li>
      </ul>
    </div>
  );
}
