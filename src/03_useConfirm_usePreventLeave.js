import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    window.confirm(message) ? onConfirm() : onCancel();
  };

  return confirmAction;
};

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  //prettier-ignore
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return [enablePrevent, disablePrevent];
};

const App = () => {
  const deleteData = () => console.log("delete");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Sure?", deleteData, abort);

  const [protect, unprotect] = usePreventLeave();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete</button>
      <p></p>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
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
