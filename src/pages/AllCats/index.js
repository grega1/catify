import React, { useContext, useEffect } from "react";
import { CatsService } from "../../services";
import { CatsContext } from "../../contexts/CatContext";
import Table from "../../components/Table";

export default function AllCats() {
  const {cats,setCats} = useContext(CatsContext);
  useEffect(() => {
    CatsService.getCats()
    .then((results) => {
      setCats(results);
      console.log('Updated cats:', results);
    })
    .catch((error) => {
      console.error('Error fetching cats:', error);
    });
  }, []);
  
  

  
  return (
    <div>
      <Table cats={cats}  />
    </div>
  );
}
