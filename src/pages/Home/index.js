import React, { useContext, useEffect, useState } from "react";
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
    <div>
      <Filter handleClick={handleClick} />
      {cat ? (<img src={cat} alt="cat" width='150' height={150}/>) : (<h1>Finding cats...</h1>)}
    </div>
  );
}
