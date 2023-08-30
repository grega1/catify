import React from "react";
import "./index.css"

export default function Header({showHomeComponent,showAllCatsComponent}) {
  return (
    <header>
      <h1>Catify</h1>
      <nav>
        <button onClick={showHomeComponent}>HOME</button>
        <button onClick={showAllCatsComponent}>ALL CATS</button>
      </nav>
    </header>
  );
}
