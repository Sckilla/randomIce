const reInteger = "^-?\\d+$";
const rePositiveInteger = "^\\d+$";
const reNumber = "^((-?(.\\d+))|(-?\\d+(.\\d+)?))$";
const rePositiveNumber = "^((.d+)|(\\d+(.\\d+)?))$";
const reArray = "^(([a-zA-Z0-9]+)|(-?\\d+))(,(([a-zA-Z0-9]+)|(-?\\d+)))+$";
const reName = "^([a-zA-ZÀ-ÿñÑ]+)(\\s[a-zA-ZÀ-ÿñÑ]+)*$";
const reNameEmpty = "^$|^([a-zA-ZÀ-ÿñÑ]+)(\\s[a-zA-ZÀ-ÿñÑ]+)*$";
const reWordNumEmpty = "^$|^([0-9a-zA-ZÀ-ÿñÑ]+)(\\s[0-9a-zA-ZÀ-ÿñÑ]+)*$";

export{
  reInteger,
  rePositiveInteger,
  reNumber,
  rePositiveNumber,
  reArray,
  reName,
  reNameEmpty,
  reWordNumEmpty,
}
