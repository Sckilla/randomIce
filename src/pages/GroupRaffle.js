import { useContext, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { localStorageNames } from "../constants/app";
import GroupRaffleData from "../components/GroupRaffle/GroupRaffleData";
import GroupRaffleResult from "../components/GroupRaffle/GroupRaffleResult";
import GroupRaffleCalculate from "../components/GroupRaffle/GroupRaffleCalculate";
import './GroupRaffle.css';

const initialColletionMembers = [];
const initialCollectionGroups = [];

const GroupRaffle = () => {
  let initialSavedCollectionMembers =
    JSON.parse(localStorage.getItem(localStorageNames.NamesCollections)) || [];

  const [collectionMembers, setCollectionMembers] = useState(
    initialColletionMembers
  );
  const [savedCollectionMembers, setSavedCollectionMembers] = useState(
    initialSavedCollectionMembers
  );

  const [collectionGroups, setCollectionGroups] = useState(
    initialCollectionGroups
  );

  const { theme } = useContext(ThemeContext);
  const { str } = useContext(LanguageContext);
  return (
    <section className={theme + " section-container"}>
      <div className="app-container">
        <h2>{str.groupRaffle.groupRaffle}</h2>
        <p>{str.groupRaffle.instructions}</p>
        <GroupRaffleData
          str={str.groupRaffle}
          collectionMembers={collectionMembers}
          setCollectionMembers={setCollectionMembers}
          savedCollectionMembers={savedCollectionMembers}
          setSavedCollectionMembers={setSavedCollectionMembers}
          NamesCollections={localStorageNames.NamesCollections}
        />
        <GroupRaffleCalculate
          str={str.groupRaffle.calculate}
          collectionMembers={collectionMembers}
          setCollectionGroups={setCollectionGroups}
        />
        <GroupRaffleResult
          str={str.groupRaffle}
          collectionGroups={collectionGroups}
        />
      </div>
    </section>
  );
};

export default GroupRaffle;
