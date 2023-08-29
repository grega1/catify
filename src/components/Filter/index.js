import React, { useState } from "react";

export default function Filter({ handleClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your word to find cats"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => handleClick(inputValue)}>
        Pesquisar
      </button>
    </div>
  );
}
