import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useNotification = (title, options) => {
  if (!window.Notification) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission === "grant") {
      new Notification(title, options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          return;
        }
        new Notification(title, options);
      });
    }
  };

  return fireNotif;
};

const App = () => {
  const triggetNotif = useNotification("hey", { body: "there" });

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggetNotif}>notify</button>
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
