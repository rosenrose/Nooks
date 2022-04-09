import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => {
    console.log("Hello");
  }, [num1]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
