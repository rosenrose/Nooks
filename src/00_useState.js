import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initVal, validator) => {
  const [value, setValue] = useState(initVal);
  const onChange = (event) => {
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(event.target.value);
    }

    if (willUpdate) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
};

const content = [
  {
    tab: "Section 1",
    content: "Content of Section 1"
  },
  {
    tab: "Section 2",
    content: "Content of Section 2"
  }
];

const useTabs = (initTab, allTabs) => {
  const [index, setIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[index],
    changeItem: setIndex
  };
};

const App = () => {
  const checkLength = (value) => value.length < 10;
  const checkChar = (value) => !value.includes("@");
  const name = useInput("John", checkLength);

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="Name" {...name} />
      <p></p>
      {content.map((section, i) => (
        <button
          key={section.tab}
          onClick={() => {
            changeItem(i);
          }}
        >
          {section.tab}
        </button>
      ))}
      <p>{currentItem.content}</p>
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
