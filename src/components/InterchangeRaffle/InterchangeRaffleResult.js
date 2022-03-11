import { localStorageNames } from "../../constants/app";
import { raffleInterchange } from "../../helpers/helpInterchangeRaffle";
import SaveState from "../SaveState";
import InterchangeRaffleResultTable from "./InterchangeRaffleResultTable";

const InterchangeRaffleResult = ({
  str,
  members,
  raffleMembers,
  setRaffleMembers,
  savedRaffles,
  setSavedRaffles,
}) => {

  const raffle = () => {
    raffleInterchange(members, setRaffleMembers);
  }
  return (
    <div className="result-container">
      {members.length > 1 && (
        <div className="input button-random">
          <button onClick={raffle}>
            {str.raffle}
          </button>
        </div>
      )}
      <SaveState
        str={{
          errorRepitedState: str.errorRepitedCollection,
          errorActionReplace: str.errorActionReplace,
          saveState: str.saveRaffle,
          saveStateAs: str.saveRaffleAs,
        }}
        state={raffleMembers}
        savedStates={savedRaffles}
        setSavedStates={setSavedRaffles}
        localStorageName={localStorageNames.InterchangeRaffles}
      />
      {raffleMembers.length !== 0 && (
        <InterchangeRaffleResultTable
          str={str}
          raffleMembers={raffleMembers}
        />
      )}
    </div>
  );
};

export default InterchangeRaffleResult;
