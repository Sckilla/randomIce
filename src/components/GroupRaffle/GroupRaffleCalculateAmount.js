import helpFormGroupRaffle from "../../helpers/helpFormGroupRaffle";
import helpRegex from "../../helpers/helpRegex";
import useForm from "../../hooks/useForm";
import { rePositiveInteger } from "../../constants/regExp";
import { helpGroupRaffle } from "../../helpers/helpGroupRaffle";
import { createRef } from "react";

const initialFormGroupAmount = {
  groupsAmount: "",
};
const valRegex = helpRegex();

const GroupRaffleCalculateAmount = ({
  str,
  collectionMembers,
  setCollectionGroups,
}) => {
  const refGroupsAmount = createRef();

  const { valGroupAmount } = helpFormGroupRaffle();

  const {
    form,
    error,
    //setForm,
    handleChange,
    handleValidation,
    handleFormSend,
  } = useForm(
    initialFormGroupAmount,
    valRegex,
    "errorField",
    valGroupAmount,
    () => {return true},
    false,
  );

  const createGroups = (e) => {
    handleFormSend(e);
    if(handleValidation({target:refGroupsAmount.current}, collectionMembers.length)){
      let numberOfGroups = parseInt(form.groupsAmount);
      helpGroupRaffle(collectionMembers, setCollectionGroups, numberOfGroups);
    }
  }

  return (
    <form className="calculate-form">
      <div className="input input-nowrap">
        <label htmlFor="groupsAmount">{str.groupAmount}</label>
        <input
          className={
            error.badFormatFields.includes("groupsAmount") ||
            error.badValuesFields.includes("groupsAmount")
              ? "error"
              : ""
          }
          ref={refGroupsAmount}
          type="number"
          name="groupsAmount"
          placeholder="2"
          regexp={rePositiveInteger}
          value={form.groupsAmount}
          onChange={handleChange}
          onBlur={(e) => handleValidation(e, collectionMembers.length)}
        />
      </div>
      <div className="input input-nowrap">
        <button onClick={createGroups}>{str.calculate}</button>
      </div>
      <div
        className={
          error.badFormatFields.length ||
          error.badValuesFields.length
            ? "active error message"
            : "message"
        }
      >
        {str[error.msg]}
      </div>
    </form>
  );
}
 
export default GroupRaffleCalculateAmount;