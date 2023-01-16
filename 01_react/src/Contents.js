import React from "react";
import { useState } from "react";

const Contents = () => {
  const [name, setName] = useState("Mateusz");
  const [count, setCount] = useState(0);
  
  const handleNameChange = () => {
    const names = ["Mati", "Paula", "Ola"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  // const handleClick2 = (name) => {
  //   console.log(`${name} clicked it`);
  // };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Change name!</button>
      <button onClick={handleClick}>Click it!</button>
      <button onClick={(e) => handleClick3(e)}>Click it!</button>
    </main>
  );
};

export default Contents;
