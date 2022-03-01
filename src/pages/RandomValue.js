import { useContext, useState } from "react";
import RandomValueCollectionForm from "../components/RandomValue/RandomValueCollectionForm";
import RandomValueRangeForm from "../components/RandomValue/RandomValueRangeForm";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const initialResult = "---";

const RandomValue = () => {
  const [result, setResult] = useState(initialResult);

  const handleResponse = (result) => {
    setResult(result);
  };

  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);

  return (
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.randomValue.randomValue}</h2>
        <h3>{str.randomValue.fromARange}</h3>
        <RandomValueRangeForm handleResponse={handleResponse} str={str.randomValue} />
        <h3>{str.randomValue.fromACollection}</h3>
        <RandomValueCollectionForm handleResponse={handleResponse} str={str.randomValue} />
        <div className="result">
          Result:
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
};

export default RandomValue;
