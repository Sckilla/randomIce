import { createRef } from "react";
import useForm from "../hooks/useForm";
import helpFormAddListItem from "../helpers/helpFormAddListItem";

const initialForm = {
  name: "",
};

// str: {
//   addAMember: "Add a member",
//   name: "Name",
//   add: 'Add',
//   errorFields: 'El nombre no es válido',
// }
// collection: collection where to add a member
// setCollection: ||
// input: {regex: /regular expression/, placeholder: placeholder for the input}

const FormAddListItem = ({str, collection, setCollection, input}) => {
  const refInputName = createRef();

  const {valRegex, valName, generateNameCode} = helpFormAddListItem();

  const { form, error, setForm, handleChange, handleValidation, handleFormSend } =
    useForm(initialForm, valRegex, "errorFields", valName, generateNameCode, {name:'',code:''});

  const handleResponse = (response) => {
    if(response.name !== ''){
      setCollection([response,...collection]);
      refInputName.current.focus();
      setForm(initialForm);
    }
  }

  return (  
    <form>
      <h3>{str.addAMember}</h3>
      <div className="input">
        <label htmlFor="name">{str.name}</label>
        <input
          className={
            error.badFormatFields.includes("name") || 
            error.badValuesFields.includes("name") 
            ? "error" 
            : ""
          }
          type="text"
          name="name"
          ref={refInputName}
          placeholder={input.placeholder}
          regexp={input.regexp}
          required
          value={form.name}
          onChange={handleChange}
          onBlur={(e) => {handleValidation(e,collection)}}
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
        <button onClick={(e) => handleResponse(handleFormSend(e))}>{str.add}</button>
      </div>
    </form>
  );
}
 
export default FormAddListItem;