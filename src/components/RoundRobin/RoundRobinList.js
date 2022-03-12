import RoundRobinListItem from "./RoundRobinListItem";

const RoundRobinList = ({str, raffleMembers}) => {
  return (  
    <>
      <table className="member-list round-robin-list">
        <tbody>
          {raffleMembers.map((item,key) => (
            <RoundRobinListItem
              key={key}
              item={item}
            />
          ))}
        </tbody>
      </table>
      {raffleMembers.length < 1 &&
        <div className="message active info">{str}</div>
      }
    </>
  );
}
 
export default RoundRobinList;