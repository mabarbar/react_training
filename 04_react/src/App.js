import "./App.css";
import Form from "./Form";
import { useState, useEffect } from "react";
import ObjectsList from "./ObjectsList.js";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType} />
      <ObjectsList items={items} />
    </div>
  );
}

export default App;
