import helpRoundRobin from "../../helpers/helpRoundRobin";

const RoundRobinCalculate = ({str, raffleMembers, setRaffleMembers, setRandomResult}) => {
  const getRandomMember = () => {
    if(raffleMembers.length > 0) helpRoundRobin(raffleMembers, setRaffleMembers, setRandomResult);
    else setRandomResult('---');
  }
  return (  
    <div className="input button-random">
      <button onClick={getRandomMember}>{str}</button>
    </div>
  );
}
 
export default RoundRobinCalculate;