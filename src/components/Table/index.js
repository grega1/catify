import React, { useContext, useState } from "react";
import "./index.css";
import { CatsService } from "../../services";
import { CatsContext } from "../../contexts/CatContext";

export default function Table({ cats }) {
  const { cat, setCat } = useContext(CatsContext);
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
        setCat(results);
        openModal(id);
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
          {cats.map((cat, i) => {
            return (
              <tr key={"row" + [i]}>
                <td>
                  <button onClick={handleClick}>{cat._id}</button>
                </td>
                <td className="tags">
                  {cat.tags && cat.tags.length > 0
                    ? cat.tags.map((tag) => <span key={[i]}>{tag}</span>)
                    : "give me a tag"}
                </td>
                <td>{cat.owner !== "null" ? cat.owner : "unknown"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openModalId !== null && (
        <div className="modal-window">
          <div>
            <button title="Close" onClick={closeModal} className="modal-close">
              Close
            </button>
            <img src={cat} alt="e" />
          </div>
        </div>
      )}
    </div>
  );
}
