import GroupRaffleResultGroup from "./GroupRaffleResultGroup";

const GroupRaffleResult = ({ str, collectionGroups }) => {
  return (
    <div className="result-container flex-container">
      {collectionGroups.map((group, key) => (
        <GroupRaffleResultGroup key={key} group={group} str={str.result} />
      ))}
    </div>
  );
};

export default GroupRaffleResult;
