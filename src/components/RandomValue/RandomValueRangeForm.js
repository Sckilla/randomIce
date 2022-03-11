import helpRandomValue from "../../helpers/helpRandomValue";
import useForm from "../../hooks/useForm";
import { reNumber } from "../../constants/regExp";

const initialFormRange = {
  minimum: 0,
  maximum: 10,
  interval: 1,
};

const RandomValueRangeForm = ({handleResponse, str}) => {
  const {
    valRegex,
    valValuesRange,
    calcRandomRange,
  } = helpRandomValue();

  const {
    form,
    error,
    handleChange,
    handleValidation,
    handleFormSend,
  } = useForm(
    initialFormRange,
    valRegex,
    "errorFields",
    valValuesRange,
    calcRandomRange,
    "---"
  );

  return (  
    <form>
      <h3>{str.fromARange}</h3>
      <div className="input">
        <label htmlFor="minimum">{str.minimumValue}</label>
        <input
          className={
            error.badFormatFields.includes("minimum") || 
            error.badValuesFields.includes("minimum") 
            ? "error" 
            : ""
          }
          type="number"
          name="minimum"
          placeholder="0"
          regexp={reNumber}
          required
          value={form.minimum}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div className="input">
        <label htmlFor="maximum">{str.maximumValue}</label>
        <input
          className={
            error.badFormatFields.includes("maximum") || 
            error.badValuesFields.includes("maximum") 
            ? "error" 
            : ""
          }
          type="number"
          name="maximum"
          placeholder="10"
          regexp={reNumber}
          required
          value={form.maximum}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div className="input">
        <label htmlFor="interval">{str.interval}</label>
        <input
          className={
            error.badFormatFields.includes("interval") || 
            error.badValuesFields.includes("interval") 
            ? "error" 
            : ""
          }
          type="number"
          name="interval"
          placeholder="1"
          regexp={reNumber}
          required
          value={form.interval}
          onChange={handleChange}
          onBlur={handleValidation}
        />
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
      <div className="input button-random">
        <button onClick={(e) => handleResponse(handleFormSend(e))}>{str.calculate}</button>
      </div>
    </form>
  );
}
 
export default RandomValueRangeForm;