import { useContext, useState } from "react";
import SequenceRaffleCalculate from "../components/SequenceRaffle/SequenceRaffleCalculate";
import SequenceRaffleData from "../components/SequenceRaffle/SequenceRaffleData";
import SequenceRaffleResult from "../components/SequenceRaffle/SequenceRaffleResult";
import { localStorageNames } from "../constants/app";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const initialMembers = [];
const initialRaffleMembers = [];

const SequenceRaffle = () => {
  let initialSavedMembers =
    JSON.parse(localStorage.getItem(localStorageNames.NamesCollections)) || [];

  const [members, setMembers] = useState(initialMembers);
  const [savedMembers, setSavedMembers] = useState(initialSavedMembers);
  const [raffleMembers, setRaffleMembers] = useState(initialRaffleMembers);

  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);

  return (
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.sequenceRaffle.sequenceRaffle}</h2>
        <p>{str.sequenceRaffle.instructions}</p>
        <SequenceRaffleData
          str={str.sequenceRaffle}
          members={members}
          setMembers={setMembers}
          savedMembers={savedMembers}
          setSavedMembers={setSavedMembers}
          NamesCollections={localStorageNames.NamesCollections}
        />
        <SequenceRaffleCalculate str={str.sequenceRaffle} members={members} setRaffleMembers={setRaffleMembers} />
        <SequenceRaffleResult str={str.sequenceRaffle.result} raffleMembers={raffleMembers} />
      </div>
    </section>
  );
};

export default SequenceRaffle;
