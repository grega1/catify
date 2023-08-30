import React, { createContext, useState } from "react";

export const CatsContext = createContext("");

export const CatsProvider = (props) => {
    const [cat,setCat] = useState("")
  const [cats, setCats] = useState([]);

  return (
    <CatsContext.Provider
      value={{
        cat,
        setCat,
        cats,
        setCats,
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};
