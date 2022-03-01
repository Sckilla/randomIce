/*
Recieves
  fields: an object with the values to validate {v1:1, v2:'a,1,c',...}
  validation: an array of objects with all the validations to do [{name:'v1', regex:'number', required: true}, {name:'v2', regex:'^\d$', required:true}]
*/

export default function helpRegex() {
  const testRegex = (fields, validations) => {
    let errors = [];
    validations.forEach((element) => {
      if (
        element.required ||
        fields[element.name] !== undefined ||
        fields[element.name] !== ""
      ) {
        let re = new RegExp(element.regex);
        if (!re.test(fields[element.name]))
          errors.push(element.name);
      }
    });
    return errors;
  };
  return testRegex;
}
