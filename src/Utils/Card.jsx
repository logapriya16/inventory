import React from "react";

export default function Card({ item, name }) {
  return (
    <div className="card">
      <div >
        <h5 >{item}</h5>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
