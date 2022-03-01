import helpInterchangeRaffle from "../../helpers/helpInterchangeRaffle";
import useForm from "../../hooks/useForm";
import { reName } from "../../js/regExp";

const initialForm = {
  name: "",
};

const InterchangeRaffleForm = ({ str }) => {

  const handleResponse = (response) => {
    console.log(response);
  }

  const {valRegex, valName, generateNameCode} = helpInterchangeRaffle();

  const { form, error, handleChange, handleValidation, handleFormSend } =
    useForm(initialForm, valRegex, "errorFields", valName, generateNameCode, "");

  return (
    <form>
      <div className="input">
        <label htmlFor="name">{str.name}</label>
        <input
          type="text"
          name="name"
          placeholder="Jon Doe"
          regexp={reName}
          required
          value={form.name}
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
      <div className="input">
        <button onClick={(e) => handleResponse(handleFormSend(e))}>Go</button>
      </div>
    </form>
  );
};

export default InterchangeRaffleForm;
