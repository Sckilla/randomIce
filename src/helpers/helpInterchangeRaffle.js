import helpRegex from "./helpRegex";

export default function helpInterchangeRaffle(){
  const valRegex = helpRegex();

  const valName = () => {
    let error = {
      msg: ".",
      badFormatFields: [],
      badValuesFields: [],
    };
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

function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}
