import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { b64_to_utf8 } from "../helpers/helpInterchangeRaffle";
import './InterchangeRaffleResultView.css'

const InterchangeRaffleResultView = () => {
  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const {member} = useParams();
  const receiver = urlParams.get('receiver');

  return (  
    <section className={theme + " section-container"}>
      <div className="app-container result-view">
        <h2>{str.interchangeRaffle.result.s1}<span>{member}</span>{str.interchangeRaffle.result.s2} <br /> <span className="recipient">{b64_to_utf8(receiver)}</span></h2>
      </div>
    </section>
  );
}
 
export default InterchangeRaffleResultView;