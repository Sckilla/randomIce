import helpFormGroupRaffle from "../../helpers/helpFormGroupRaffle";
import helpRegex from "../../helpers/helpRegex";
import useForm from "../../hooks/useForm";
import { rePositiveInteger } from "../../constants/regExp";
import { helpGroupRaffle } from "../../helpers/helpGroupRaffle";
import { createRef } from "react";

const initialFormGroupSize = {
  groupSize: "",
};
const valRegex = helpRegex();

const GroupRaffleCalculateSize = ({
  str,
  collectionMembers,
  setCollectionGroups,
}) => {
  const refGroupSize = createRef();

  const { valGroupSize } = helpFormGroupRaffle();

  const {
    form,
    error,
    //setForm,
    handleChange,
    handleValidation,
    handleFormSend,
  } = useForm(
    initialFormGroupSize,
    valRegex,
    "errorField",
    valGroupSize,
    () => {return true},
    false,
  );

  const createGroups = (e) => {
    handleFormSend(e);
    if(handleValidation({target: refGroupSize.current}, collectionMembers.length)){
      let numberOfGroups = Math.ceil(collectionMembers.length / parseInt(form.groupSize));
      helpGroupRaffle(collectionMembers, setCollectionGroups, numberOfGroups);
    }
  }

  return (
    <form className="calculate-form">
      <div className="input input-nowrap">
        <label htmlFor="groupSize">{str.groupSize}</label>
        <input
          className={
            error.badFormatFields.includes("groupSize") ||
            error.badValuesFields.includes("groupSize")
              ? "error"
              : ""
          }
          ref={refGroupSize}
          type="number"
          name="groupSize"
          placeholder="2"
          regexp={rePositiveInteger}
          value={form.groupSize}
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
};

export default GroupRaffleCalculateSize;
