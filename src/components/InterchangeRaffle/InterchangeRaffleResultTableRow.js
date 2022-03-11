import { domain } from "../../constants/host";
import helpCopy from "../../helpers/helpCopy";

const InterchangeRaffleResultTableRow = ({ raffleMember, str }) => {
  return (
    <tr>
      <td>{raffleMember.name}</td>
      <td>{raffleMember.receiver}</td>
      <td>
        <div className="input">
          <button
            onClick={() =>
              helpCopy(
                `${domain}#/interchangeRaffleResultView/${raffleMember.name}?receiver=${raffleMember.receiver}`
              )
            }
          >
            {str.copyLink}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InterchangeRaffleResultTableRow;
