import helpRandomValue from "../../helpers/helpRandomValue";
import useForm from "../../hooks/useForm";
import { reNumber } from "../../js/regExp";

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
    form: formRange,
    error: errorRange,
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
      <div className="input">
        <label htmlFor="minimum">{str.minimumValue}</label>
        <input
          className={
            errorRange.badFormatFields.includes("minimum") || 
            errorRange.badValuesFields.includes("minimum") 
            ? "error" 
            : ""
          }
          type="number"
          name="minimum"
          placeholder="0"
          regexp={reNumber}
          required
          value={formRange.minimum}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div className="input">
        <label htmlFor="maximum">{str.maximumValue}</label>
        <input
          className={
            errorRange.badFormatFields.includes("maximum") || 
            errorRange.badValuesFields.includes("maximum") 
            ? "error" 
            : ""
          }
          type="number"
          name="maximum"
          placeholder="10"
          regexp={reNumber}
          required
          value={formRange.maximum}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div className="input">
        <label htmlFor="interval">{str.interval}</label>
        <input
          className={
            errorRange.badFormatFields.includes("interval") || 
            errorRange.badValuesFields.includes("interval") 
            ? "error" 
            : ""
          }
          type="number"
          name="interval"
          placeholder="1"
          regexp={reNumber}
          required
          value={formRange.interval}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </div>
      <div
        className={
          errorRange.badFormatFields.length ||
          errorRange.badValuesFields.length
            ? "active error message"
            : "message"
        }
      >
        {str[errorRange.msg]}
      </div>
      <div className="input">
        <button onClick={(e) => handleResponse(handleFormSend(e))}>Go</button>
      </div>
    </form>
  );
}
 
export default RandomValueRangeForm;