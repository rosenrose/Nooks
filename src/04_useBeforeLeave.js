import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useBeforeLeave = (onLeave) => {
  useEffect(() => {
    if (typeof onLeave === "function") {
      const handleLeave = (event) => {
        if (event.clientY <= 0) {
          onLeave();
        }
      };

      document.addEventListener("mouseleave", handleLeave);

      return () => {
        document.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, [onLeave]);
};

const App = () => {
  const noticeOnLeave = () => console.log("don't");
  useBeforeLeave(noticeOnLeave);

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
