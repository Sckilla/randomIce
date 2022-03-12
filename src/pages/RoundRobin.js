import { useContext, useState } from "react";
import RoundRobinCalculate from "../components/RoundRobin/RoundRobinCalculate";
import RoundRobinData from "../components/RoundRobin/RoundRobinData";
import RoundRobinList from "../components/RoundRobin/RoundRobinList";
import RoundRobinResult from "../components/RoundRobin/RoundRobinResult";
import RoundRobinStart from "../components/RoundRobin/RoundRobinStart";
import { localStorageNames } from "../constants/app";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import './RoundRobin.css';

const initialMembers = [];
const initialRaffleMembers = [];
const initialIsResultActive = false;
const initialRandomResult = "---";

const RoundRobin = () => {
  let initialSavedMembers =
    JSON.parse(localStorage.getItem(localStorageNames.NamesCollections)) || [];

  const [members, setMembers] = useState(initialMembers);
  const [savedMembers, setSavedMembers] = useState(initialSavedMembers);
  const [raffleMembers, setRaffleMembers] = useState(initialRaffleMembers);
  const [isResultActive, setIsResultActive] = useState(initialIsResultActive);
  const [randomResult, setRandomResult] = useState(initialRandomResult);

  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);
  return (
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.roundRobin.roundRobin}</h2>
        <p>{str.roundRobin.instructions}</p>
        <RoundRobinData
          str={str.roundRobin}
          members={members}
          setMembers={setMembers}
          savedMembers={savedMembers}
          setSavedMembers={setSavedMembers}
          NamesCollections={localStorageNames.NamesCollections}
        />
        <RoundRobinStart
          str={str.roundRobin.start}
          members={members}
          setRaffleMembers={setRaffleMembers}
          setIsResultActive={setIsResultActive}
        />
        {
          isResultActive &&
          <div className="flex-container">
            <div className="flex-div">
              <RoundRobinList str={str.roundRobin.emptyList} raffleMembers={raffleMembers} />
            </div>
            <div className="flex-div">
              <RoundRobinCalculate
                str={str.roundRobin.nextRandom}
                raffleMembers={raffleMembers}
                setRaffleMembers={setRaffleMembers}
                setRandomResult={setRandomResult}
              />
              <RoundRobinResult randomResult={randomResult} />
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default RoundRobin;
