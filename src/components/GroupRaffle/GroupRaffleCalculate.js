import GroupRaffleCalculateAmount from "./GroupRaffleCalculateAmount";
import GroupRaffleCalculateSize from "./GroupRaffleCalculateSize";

const GroupRaffleCalculate = ({
  str,
  collectionMembers,
  setCollectionGroups,
}) => {

  return (
    <div className="calculate-container">
      {collectionMembers.length > 1 && (
        <>
          <h3>{str.chooseARaffleType}</h3>
          <GroupRaffleCalculateSize str={str.size} collectionMembers={collectionMembers} setCollectionGroups={setCollectionGroups} />
          <GroupRaffleCalculateAmount str={str.amount} collectionMembers={collectionMembers} setCollectionGroups={setCollectionGroups} />
        </>
      )}
    </div>
  );
};

export default GroupRaffleCalculate;
