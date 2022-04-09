import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };

    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [onChange]);

  return status;
};

const App = () => {
  const onNetworkChange = (online) =>
    console.log(online ? "online" : "offline");
  const online = useNetwork(onNetworkChange);

  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
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
