import { StrictMode, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFullscreen = () => {
    if (element.current?.requestFullscreen) {
      element.current?.requestFullscreen();
    } else if (element.current?.mozRequestFullscreen) {
      element.current?.mozRequestFullscreen();
    } else if (element.current?.webkitRequestFullscreen) {
      element.current?.webkitRequestFullscreen();
    } else if (element.current?.msRequestFullscreen) {
      element.current?.msRequestFullscreen();
    }
    runCallback(true);
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };

  return [element, triggerFullscreen, exitFullscreen];
};

const App = () => {
  const onFullscreen = (isFull) => console.log(isFull ? "full" : "small");
  const [fullScreenElem, triggerFull, exitFull] = useFullscreen(onFullscreen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div ref={fullScreenElem}>
        <img
          src="https://rosenrose.github.io/djmax/img/ClearPlayFail.png"
          width="480"
          alt="ClearPlayFail"
        />
        <p></p>
        <button onClick={exitFull}>exitFullscreen</button>
      </div>
      <button onClick={triggerFull}>fullscreen</button>
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
