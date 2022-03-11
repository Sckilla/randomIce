import { reNameEmpty } from "../../constants/regExp";
import FormAddListItem from "../FormAddListItem";
import List from "../List";
import LoadState from "../LoadState";
import SaveState from "../SaveState";

const InterchangeRaffleData = ({
  str,
  members,
  setMembers,
  savedCollections,
  setSavedCollections,
  NamesCollections,
}) => {
  return (
    <div className="flex-container">
      <div className="flex-div">
        <FormAddListItem
          str={str}
          collection={members}
          setCollection={setMembers}
          input={{ regexp: reNameEmpty, placeholder: "Jon Doe" }}
        />
      </div>
      <div className="flex-div">
        <h3>{str.members + (members.length ? ": " + members.length : "")}</h3>
        {members.length > 0 ? (
          <>
            <List collection={members} setCollection={setMembers} />
            {members.length > 1 && (
              <SaveState
                str={{
                  errorRepitedState: str.errorRepitedCollection,
                  errorActionReplace: str.errorActionReplace,
                  saveState: str.saveCollection,
                  saveStateAs: str.saveCollectionAs,
                }}
                state={members}
                savedStates={savedCollections}
                setSavedStates={setSavedCollections}
                localStorageName={NamesCollections}
              />
            )}
          </>
        ) : (
          <>
            <div className="message active info">{str.infoNoMembersAdded}</div>
            <LoadState
              str={{
                loadFromSaves: str.loadFromSaves,
                infoNoDataSaved: str.infoNoCollectionsAdded,
                load: str.load,
                delete: str.delete,
              }}
              setState={setMembers}
              savedStates={savedCollections}
              setSavedStates={setSavedCollections}
              localStorageName={NamesCollections}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InterchangeRaffleData;
