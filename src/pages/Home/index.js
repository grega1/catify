import React, { useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter";
import { CatsService } from "../../services/";
import { CatsContext } from "../../contexts/CatContext";
export default function Home() {
//   const { setCats } = useContext(CatsContext);
  const [catFiltered, setCatFiltered] = useState([]);
  const [hasCatFiltered, setHasCatFiltered] = useState(false);
  const [word, setWord] = useState("");


  const handleClick = (event) => {
    setWord(event.target.value);
    if (!hasCatFiltered) {
        CatsService.getFilteredCats(word).then((results) => {
          setCatFiltered(results);
          setHasCatFiltered(true);
        //   setCats(results);
        });
      }
  };

  return (
    <div>
      <Filter handleClick={handleClick} />
      <div></div>
    </div>
  );
}
