import React from "react";

export default function Header({showHomeComponent,showAllCatsComponent}) {
  return (
    <div>
      <h1>Catify</h1>
      <nav>
        <button onClick={showHomeComponent}>Home</button>
        <button onClick={showAllCatsComponent}>AllCats</button>
      </nav>
    </div>
  );
}
