import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import MainMenuOption from "./MainMenuOption";
import './MainMenu.css'

const MainMenu = () => {
  const { str } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <nav className=" main_menu">
        <ul>
          <li>
            <Link to="/interchangeRaffle">
              <MainMenuOption
                option={str.mainMenu.interchangeRaffle}
                description={str.mainMenu.interchangeRaffleDes}
                color="normal"
                theme={theme}
              />
            </Link>
          </li>
          <li>
            <Link to="/groupRaffle">
              <MainMenuOption 
                option={str.mainMenu.groupRaffle}
                description={str.mainMenu.groupRaffleDes}
                color="normal"
                theme={theme}
              />
            </Link>
          </li>
          <li>
            <Link to="/sequenceRaffle">
              <MainMenuOption
                option={str.mainMenu.sequenceRaffle}
                description={str.mainMenu.sequenceRaffleDes}
                color="normal"
                theme={theme}
              />
            </Link>
          </li>
          <li>
            <Link to="/roundRobin">
              <MainMenuOption
                option={str.mainMenu.roundRobin}
                description={str.mainMenu.roundRobinDes} 
                color="normal"
                theme={theme}
              />
            </Link>
          </li>
          <li>
            <Link to="/randomValue">
              <MainMenuOption 
                option={str.mainMenu.randomValue}
                description={str.mainMenu.randomValueDes}
                color="normal"
                theme={theme}
              />
            </Link>
          </li>
          <li>
            <Link to="/dice">
              <MainMenuOption 
                option={str.mainMenu.dice}
                description={str.mainMenu.diceDes}
                color="normal"
                theme={theme}
              />  
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainMenu;
