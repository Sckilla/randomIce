const reInteger = "^-?\\d+$";
const rePositiveInteger = "^\\d+$";
const reNumber = "^((-?(.\\d+))|(-?\\d+(.\\d+)?))$";
const rePositiveNumber = "^((.d+)|(\\d+(.\\d+)?))$";
const reArray = "^(([a-zA-Z0-9]+)|(-?\\d+))(,(([a-zA-Z0-9]+)|(-?\\d+)))+$";
const reName = "^([a-zA-Z]+)(\\s[a-zA-Z]+)*$";

export{
  reInteger,
  rePositiveInteger,
  reNumber,
  rePositiveNumber,
  reArray,
  reName,
}
