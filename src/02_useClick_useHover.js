import { StrictMode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    if (typeof onClick === "function") {
      const element = ref.current;

      element?.addEventListener("click", onClick);

      return () => {
        element?.removeEventListener("click", onClick);
      };
    }
  }, [onClick]);

  return ref;
};

const useHover = (onHover) => {
  const ref = useRef();

  useEffect(() => {
    if (typeof onHover === "function") {
      const element = ref.current;

      element?.addEventListener("mouseenter", onHover);

      return () => {
        element?.removeEventListener("mouseenter", onHover);
      };
    }
  }, [onHover]);

  return ref;
};

const App = () => {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  const hover = useHover(() => console.log("hover"));

  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
      <span ref={hover}>MouseEnter</span>
      <input type="text" placeholder="d" />
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
