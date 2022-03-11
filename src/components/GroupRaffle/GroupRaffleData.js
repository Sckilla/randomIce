import { reNameEmpty } from "../../constants/regExp";
import FormAddListItem from "../FormAddListItem";
import List from "../List";
import LoadState from "../LoadState";
import SaveState from "../SaveState";

const GroupRaffleData = ({str, collectionMembers, setCollectionMembers, savedCollectionMembers, setSavedCollectionMembers, NamesCollections}) => {
  return (  
    <div className="flex-container">
      <div className="flex-div">
        <FormAddListItem
          str={str.form}
          collection={collectionMembers}
          setCollection={setCollectionMembers}
          input={{ regexp: reNameEmpty, placeholder: "Jon Doe" }}
        />
      </div>
      <div className="flex-div">
        <h3>{str.members + (collectionMembers.length ? ": " + collectionMembers.length : "")}</h3>
        {collectionMembers.length > 0 ? (
          <>
            <List
              collection={collectionMembers}
              setCollection={setCollectionMembers}
            />
            {collectionMembers.length > 1 && (
              <SaveState
                str={str.saveMembers}
                state={collectionMembers}
                savedStates={savedCollectionMembers}
                setSavedStates={setSavedCollectionMembers}
                localStorageName={NamesCollections}
              />
            )}
          </>
        ) : (
          <>
            <div className="message active info">
              {str.infoNoMembersAdded}
            </div>
            <LoadState
              str={str.loadMembers}
              setState={setCollectionMembers}
              savedStates={savedCollectionMembers}
              setSavedStates={setSavedCollectionMembers}
              localStorageName={NamesCollections}
            />
          </>
        )}
      </div>
    </div>
  );
}
 
export default GroupRaffleData;