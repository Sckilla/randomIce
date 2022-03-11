import SequenceRaffleResultRow from "./SequenceRaffleResultRow";

const SequenceRaffleResult = ({str, raffleMembers}) => {
  return (  
    <>
      {
        raffleMembers.length > 0 &&
        <div className="result-container">
          <table className="result-table">
            <thead>
              <tr>
                <th>{str.order}</th>
                <th>{str.name}</th>
              </tr>
            </thead>
            <tbody>
              {raffleMembers.map((raffleMember) => (
                <SequenceRaffleResultRow
                  key={raffleMember.order}
                  raffleMember={raffleMember}
                />
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
}
 
export default SequenceRaffleResult;