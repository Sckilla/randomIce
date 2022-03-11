import { useState } from "react";

const initialError = {
  msg: ".",
  badFormatFields: [],
  badValuesFields: [],
};

/*
Recieves
  initialForm: the initial state for the form
  valRegex: a function that returns an array with the fields with syntatic errors
  valValues: a function that returns an error object with the message of error and the fields involved
  sendForm: a function that sends the form and returns a response
  initialResponse: the initial state for the response
*/

const useForm = (initialForm, valRegex, errRegex, valValues, sendForm, defaultResponse) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(initialError);

  /*
  Recieves
    e: event default
  */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*
  Recieves
    e: event default
    state: state which can be validated against the new value
  */
  const handleValidation = (e, state = null) => {
    let val = [
      {
        name: e.target.name,
        regex: e.target.getAttribute("regexp"),
        required: e.target.required,
      },
    ];
    let valRegexResult = [
      ...valRegex(form, val),
      ...error.badFormatFields.filter((value) => value !== e.target.name),
    ];
    if (valRegexResult.length) {
      setError({
        msg: errRegex,
        badFormatFields: valRegexResult,
        badValuesFields: [],
      });
      return false;
    } else {
      let valValuesResult =  valValues(form, state);
      setError(valValuesResult);
      if(valValuesResult.badValuesFields.length) return false;
    }
    return true;
  };

  /*
  Recieves
    e: event default
  */
  const handleFormSend = (e) => {
    e.preventDefault();
    if (error.badFormatFields.length === 0 && error.badValuesFields.length === 0) {
      return sendForm(form);
    } else {
      return defaultResponse;
    }
  };

  return {
    form,
    error,
    setForm,
    setError,
    handleChange,
    handleValidation,
    handleFormSend,
  };
};

export default useForm;
