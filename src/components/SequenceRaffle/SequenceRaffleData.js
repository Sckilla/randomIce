import { reNameEmpty } from "../../constants/regExp";
import FormAddListItem from "../FormAddListItem";
import List from "../List";
import LoadState from "../LoadState";
import SaveState from "../SaveState";

const SequenceRaffleData = ({
  str,
  members,
  setMembers,
  savedMembers,
  setSavedMembers,
  NamesCollections,
}) => {
  return (
    <div className="flex-container">
      <div className="flex-div">
        <FormAddListItem
          str={str.form}
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
                str={str.saveMembers}
                state={members}
                savedStates={savedMembers}
                setSavedStates={setSavedMembers}
                localStorageName={NamesCollections}
              />
            )}
          </>
        ) : (
          <>
            <div className="message active info">{str.infoNoMembersAdded}</div>
            <LoadState
              str={str.loadMembers}
              setState={setMembers}
              savedStates={savedMembers}
              setSavedStates={setSavedMembers}
              localStorageName={NamesCollections}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SequenceRaffleData;
