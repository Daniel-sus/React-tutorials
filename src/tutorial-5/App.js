import React from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import "./App.css";
import { nounsArr, adjectivesArr } from "./Phrases";

const App = () => {
  const [isArray, setIsArray] = React.useState([]);

  const generatePhrase = () => {
    let phrase =
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] +
      " " +
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] +
      " " +
      nounsArr[Math.floor(Math.random() * nounsArr.length)];
    setIsArray([phrase, ...isArray]);
  };

  const deletePhrase = () => {
    setIsArray([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {isArray.length > 0 ? (
          isArray.map((text, index) => <Phrase key={index} text={text} />)
        ) : (
          <EmptyBlock />
        )}
      </div>
      <button onClick={generatePhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={deletePhrase} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};

export default App;
