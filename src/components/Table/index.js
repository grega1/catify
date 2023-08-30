import React, { useContext, useState } from "react";
import { CatsService } from "../../services";
import { CatsContext } from "../../contexts/CatContext";

export default function Table({ cats }) {
  const {cat,setCat, recentViewed,addToRecentViewed } = useContext(CatsContext);
  const [openModalId, setOpenModalId] = useState(null);
  const openModal = (id) => {
    setOpenModalId(id);

  };

  const closeModal = () => {
    setOpenModalId(null);
  };


  const handleClick= (event) => {
    const id = event.target.textContent;

    CatsService.getCatById(id).then((results) => {
      console.log(results);
      setCat(results);
      addToRecentViewed(id);
      openModal(id);
      
      console.log('Recent viewd' + recentViewed);
      console.log(cat)
    }).catch((error) => {
      console.error('Error fetching cats:', error);
    });
    
    
  }
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>tags</th>
          <th>owner</th>
        </tr>
      </thead>
      {cats.map((e) => {
        return (
          <tbody>
            <tr>
              <td><button onClick={handleClick}>{e._id}</button>
              </td>
                <td>{e.tags.map((tag)=>
                  <span>{tag}</span>
                )}</td>
              <td>{e.owner !== "null" ? e.owner : "unknowed"}</td>
            </tr>
            
          </tbody>
        );
      })}
    {openModalId !== null && <img openModalId src={cat} alt="e"/>}
    </table>
  );
}
