import React from "react";
import "./index.css"

export default function Header({showHomeComponent,showAllCatsComponent,showHome}) {
  return (
    <header>
      <h1>Catify</h1>
      <nav>
        <button className={showHome? "selected" : ""}onClick={showHomeComponent}>HOME</button>
        <button className={!showHome? "selected" : ""}onClick={showAllCatsComponent}>ALL CATS</button>
      </nav>
    </header>
  );
}
