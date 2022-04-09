import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import useAxios from "./useAxios";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLtYQ7DpMMg-I22iICgrMNC1ln3ZT4FxUj&key=${API_KEY}&part=snippet,contentDetails&maxResults=20`,
  });
  console.log(loading, data, error);

  return (
    <div className="App">
      {data && <h1>{data.status}</h1>}
      {loading && <h2>loading...</h2>}
      <button onClick={refetch}>Refetch</button>
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
