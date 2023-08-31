import React, { useContext } from "react";
import "./index.css";
import Filter from "../../components/Filter";

import catMouse from "../../assets/cat-mouse.gif"
import { CatsService } from "../../services/";
import { CatsContext } from "../../contexts/CatContext";


export default function Home() {
  const { cat, setCat } = useContext(CatsContext);

  const handleClick = (inputValue) => {
    CatsService.getFilteredCats(inputValue).then((results) => {
      setCat(results);
    });
  };

  return (
    <div className="home">
      <Filter handleClick={handleClick} />
      <div className="cat-viewer">
        {cat ? (
          <img src={cat} alt="cat" />
        ) : (<p> Searching cats...
          <img src={catMouse} alt="cat-searching" />
          </p>
        )}
      </div>
    </div>
  );
}
