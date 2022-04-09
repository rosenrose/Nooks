import { StrictMode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration === "number" && typeof delay === "number") {
      if (element.current) {
        element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        element.current.style.opacity = 1;
      }
    }
  }, [duration, delay]);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeIn1 = useFadeIn(1, 2);
  const fadeIn2 = useFadeIn(4.5);

  return (
    <div className="App">
      <h1 {...fadeIn1}>Hello</h1>
      <p {...fadeIn2}>lalalal</p>
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
