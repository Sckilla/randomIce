import helpRandom from "./helpRandom";
import helpRegex from "./helpRegex";

export default function helpRandomValue() {
  const valRegex = helpRegex();

  const valValuesRange = (values) => {
    let error = {
      msg: ".",
      badFormatFields: [],
      badValuesFields: [],
    };
    if(parseFloat(values.minimum) + parseFloat(values.interval) > parseFloat(values.maximum)){
      error.msg = "errorValuesRange";
      error.badValuesFields = ['minimum', 'maximum', 'interval'];
    }
    if(parseFloat(values.interval) < 0.000000001){
      error.msg = "errorValuesRangeInterval";
      error.badValuesFields = ['interval'];
    }
    if(parseFloat(values.maximum) < -999999999 || parseFloat(values.maximum) > 1000000000){
      error.msg = "errorValuesRangeMaximum";
      error.badValuesFields = ['maximum'];
    }
    if(parseFloat(values.minimum) < -1000000000 || parseFloat(values.minimum) > 999999999){
      error.msg = "errorValuesRangeMinimum";
      error.badValuesFields = ['minimum'];
    }
    return error;
  };

  const calcRandomRange = (values) => {
    let maximum = parseFloat(values.maximum);
    let minimum = parseFloat(values.minimum);
    let interval = parseFloat(values.interval);
    let realMaximum = maximum - (maximum % interval) + interval;
    let randValue = helpRandom(realMaximum,minimum);
    let intervalDecimals = (String(values.interval).split('.')[1]);
    if(intervalDecimals){
      let res = randValue - randValue % interval;
      let dec = intervalDecimals.length;
      return res.toFixed(dec);
    }
    return randValue - randValue % interval;
  };

  const valValuesCollection = (values) => {
    let error = {
      msg: ".",
      badFormatFields: [],
      badValuesFields: [],
    };
    return error;
  };

  const calcRandomCollection = (values) => {
    let collection = values.values.split(',');
    let randValue = helpRandom(collection.length,0,true);
    return collection[randValue];
  };

  return {
    valRegex,
    valValuesRange,
    calcRandomRange,
    valValuesCollection,
    calcRandomCollection,
  };
}
