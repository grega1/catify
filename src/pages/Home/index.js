import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import Filter from "../../components/Filter";
import { CatsService } from "../../services/";
import { CatsContext } from "../../contexts/CatContext";
export default function Home() {
  const { cat, setCat } = useContext(CatsContext);

  const handleClick = (inputValue) => {
    console.log(inputValue);
    
      CatsService.getFilteredCats(inputValue).then((results) => {
        
        setCat(results);
      });
    
  };

  return (
    <div className="home">
      <Filter handleClick={handleClick} />
      {cat ? (<img src={cat} alt="cat" width='150' height={150}/>) : (<h1>Finding cats...</h1>)}
      <div className="recent-viewed">
      <h2>Recent Viewed</h2>
      {cat ? (<img src={cat} alt="cat" width='150' height={150}/>) : (<h3>Nothing here...</h3>)}
      </div>
    </div>
  );
}
