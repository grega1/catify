import React, { createContext, useState } from "react";

export const CatsContext = createContext("");

export const CatsProvider = (props) => {
    const [cat,setCat] = useState("")
  const [cats, setCats] = useState([]);
  const [recentViewed, setRecentViewed] = useState([]);
  const addToRecentViewed = (cat) => {
    if (!recentViewed.some((e) => e.id === cat.id))
      setRecentViewed([...recentViewed, cat]);
  };

  return (
    <CatsContext.Provider
      value={{
        cat,
        setCat,
        cats,
        setCats,
        recentViewed,
        setRecentViewed,
        addToRecentViewed,
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};
