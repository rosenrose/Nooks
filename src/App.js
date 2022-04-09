import React from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = React.useState(1);
  const addItem = () => {
    setItem(item + 1);
  };
  const subItem = () => {
    setItem(item - 1);
  };

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={addItem}>Add</button>
      <button onClick={subItem}>Sub</button>
    </div>
  );
}
