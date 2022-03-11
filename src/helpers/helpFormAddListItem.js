import helpRegex from "./helpRegex";

export default function helpFormAddListItem(){
  const valRegex = helpRegex();

  const valName = (values,members) => {
    let error = {
      msg: ".",
      badFormatFields: [],
      badValuesFields: [],
    };
    members.forEach(element => {
      if(element.name === values.name){
        error.msg = "errorRepitedName";
        error.badValuesFields = "name";
        console.log(error);
        return error;
      }
    });
    return error;
  }

  const generateNameCode = (values) => {
    return {
      name: values.name,
      code: utf8_to_b64(values.name),
    };
  }

  const decodeNameCode = (code) => {
    return b64_to_utf8(code);
  }

  return {
    valRegex,
    valName,
    generateNameCode,
    decodeNameCode,
  }
}

export function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}