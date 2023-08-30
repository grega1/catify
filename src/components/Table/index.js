import React, { useContext, useState } from "react";
import "./index.css";
import { CatsService } from "../../services";
import { CatsContext } from "../../contexts/CatContext";

export default function Table({ cats }) {
  const { cat, setCat, recentViewed, addToRecentViewed } =
    useContext(CatsContext);
  const [openModalId, setOpenModalId] = useState(null);
  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const handleClick = (event) => {
    const id = event.target.textContent;

    CatsService.getCatById(id)
      .then((results) => {
        console.log(results);
        setCat(results);
        addToRecentViewed(id);
        openModal(id);

        console.log("Recent viewd" + recentViewed);
        console.log(cat);
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
      });
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>tags</th>
            <th>owner</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {cats.map((e) => {
            return (
              <tr>
                <td>
                  <button onClick={handleClick}>{e._id}</button>
                </td>
                <td className="tags">
                  {e.tags.text !== ""
                    ? e.tags.map((tag) => <span>{tag}</span>)
                    : "give me a tag"}
                </td>
                <td>{e.owner !== "null" ? e.owner : "disponible"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openModalId !== null && (
        <div className="modal-window" >
          <div>
            <button title="Close" onClick={closeModal} class="modal-close">
              Close
            </button>
            <img src={cat} alt="e" />
          </div>
        </div>
      )}
    </div>
  );
}
