import helpRandomValue from "../../helpers/helpRandomValue";
import useForm from "../../hooks/useForm";
import { reArray } from "../../constants/regExp";

const initialFormCollection = {
  values: "a,b,c,d,e,f",
};

const RandomValueCollectionForm = ({ handleResponse, str }) => {
  const { valRegex, valValuesCollection, calcRandomCollection } =
    helpRandomValue();

  const { form, error, handleChange, handleValidation, handleFormSend } =
    useForm(
      initialFormCollection,
      valRegex,
      "errorFields",
      valValuesCollection,
      calcRandomCollection,
      "---"
    );

  return (
    <form>
      <h3>{str.fromACollection}</h3>
      <div className="input">
        <label htmlFor="values">{str.values}</label>
        <input
          className={
            error.badFormatFields.includes("values") ||
            error.badValuesFields.includes("values")
              ? "error"
              : ""
          }
          type="text"
          name="values"
          placeholder="1,b,3,d,5,f"
          regexp={reArray}
          required
          value={form.values}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div
        className={
          error.badFormatFields.length || error.badValuesFields.length
            ? "active error message"
            : "message"
        }
      >
        {str[error.msg]}
      </div>
      <div className="input button-random">
        <button onClick={(e) => handleResponse(handleFormSend(e))}>{str.calculate}</button>
      </div>
    </form>
  );
};

export default RandomValueCollectionForm;
