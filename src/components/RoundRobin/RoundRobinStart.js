const RoundRobinStart = ({ str, members, setRaffleMembers, setIsResultActive }) => {
  const fillCollection = () => {
    setRaffleMembers(members);
    setIsResultActive(true);
  };
  return (
    <>
      {members.length > 1 && (
        <div>
          <div className="input button-random">
            <button onClick={fillCollection}>{str}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoundRobinStart;
