import { useContext } from "react";
import InterchangeRaffleForm from "../components/InterchangeRaffle/InterchangeRaffleForm";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const InterchangeRaffle = () => {
  const {theme} = useContext(ThemeContext);
  const {str} = useContext(LanguageContext)
  return (  
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.interchangeRaffle.interchangeRaffle}</h2>
        <InterchangeRaffleForm str={str.interchangeRaffle}/>
      </div>
    </section>
  );
}
 
export default InterchangeRaffle;