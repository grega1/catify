import React, { useState } from "react";

export default function Filter({ handleClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    const limitedValue = value.replace(/\s/g, "");
    setInputValue(limitedValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your word to find cats"
        value={inputValue}
        onChange={handleChange}
        pattern="^[^\s]*$"
      />
      <button type="submit" onClick={() => handleClick(inputValue)}>
        Pesquisar
      </button>
    </div>
  );
}
