import { useContext, useState } from "react";
import InterchangeRaffleData from "../components/InterchangeRaffle/InterchangeRaffleData";
import InterchangeRaffleResult from "../components/InterchangeRaffle/InterchangeRaffleResult";
import LoadState from "../components/LoadState";
import { localStorageNames } from "../constants/app";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import "./InterchangeRaffle.css";

const initialMembers = [];
const initialRaffleMembers = [];

const InterchangeRaffle = () => {
  let savedCollectionsInit =
    JSON.parse(localStorage.getItem(localStorageNames.NamesCollections)) || [];
  let savedRafflesInit =
    JSON.parse(localStorage.getItem(localStorageNames.InterchangeRaffles)) ||
    [];

  const [members, setMembers] = useState(initialMembers);
  const [raffleMembers, setRaffleMembers] = useState(initialRaffleMembers);
  const [savedCollections, setSavedCollections] =
    useState(savedCollectionsInit);
  const [savedRaffles, setSavedRaffles] = useState(savedRafflesInit);

  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);
  return (
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.interchangeRaffle.interchangeRaffle}</h2>
        <p>{str.interchangeRaffle.instructions}</p>
        <div>
          {str.interchangeRaffle.instructionsLoadRaffle}
          <LoadState
            str={{
              loadFromSaves: str.interchangeRaffle.loadFromSaves,
              infoNoDataSaved: str.interchangeRaffle.infoNoCollectionsAdded,
              load: str.interchangeRaffle.load,
              delete: str.interchangeRaffle.delete,
            }}
            setState={setRaffleMembers}
            savedStates={savedRaffles}
            setSavedStates={setSavedRaffles}
            localStorageName={localStorageNames.NamesCollections}
          />
        </div>
        <InterchangeRaffleData
          str={str.interchangeRaffle}
          members={members}
          setMembers={setMembers}
          savedCollections={savedCollections}
          setSavedCollections={setSavedCollections}
          NamesCollections={localStorageNames.NamesCollections}
        />
        <InterchangeRaffleResult
          str={str.interchangeRaffle}
          members={members}
          raffleMembers={raffleMembers}
          setRaffleMembers={setRaffleMembers}
          savedRaffles={savedRaffles}
          setSavedRaffles={setSavedRaffles}
        />
      </div>
    </section>
  );
};

export default InterchangeRaffle;
