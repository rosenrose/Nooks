import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    document.head.querySelector("title").textContent = title;
  }, [title]);

  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 5000);

  return (
    <div className="App">
      <h1>Hello</h1>
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
