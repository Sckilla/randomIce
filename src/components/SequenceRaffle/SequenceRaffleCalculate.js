import helpSequenceRaffle from "../../helpers/helpSequenceRaffle";

const SequenceRaffleCalculate = ({str, members, setRaffleMembers}) => {
  const raffle = () => {
    helpSequenceRaffle(members, setRaffleMembers);
  }

  return (
    <>
      {
        members.length > 1 &&
        <div>
          <div className="input button-random">
            <button onClick={raffle}>
              {str.calculate}
            </button>
          </div>
        </div>
      }
    </>
  );
}
 
export default SequenceRaffleCalculate;