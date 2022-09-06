import React from "react";

const Contents = () => {
  const handleNameChange = () => {
    const names = ["Mati", "Paula", "Ola"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Contents;
