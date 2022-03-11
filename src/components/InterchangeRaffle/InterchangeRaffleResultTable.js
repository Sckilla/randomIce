import { useRef } from "react";
import InterchangeRaffleResultTableRow from "./InterchangeRaffleResultTableRow";

const InterchangeRaffleResultTable = ({ str, raffleMembers }) => {
  const refResult = useRef();
  //refResult.current.scrollIntoView();
  return (
    <table ref={refResult} className="result-table">
      <thead>
        <tr>
          <th>{str.member}</th>
          <th>{str.receiver}</th>
          <th>{str.copyLink}</th>
        </tr>
      </thead>
      <tbody>
        {raffleMembers.map((raffleMember) => (
          <InterchangeRaffleResultTableRow
            key={raffleMember.receiver}
            raffleMember={raffleMember}
            str={str}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InterchangeRaffleResultTable;
