export default function helpFormGroupRaffle(){
  const initialError = {
    msg: ".",
    badFormatFields: [],
    badValuesFields: [],
  };

  const valGroupSize = (form, qtyMembers) => {
    let error = initialError;
    let groupSize = parseInt(form.groupSize);
    if((qtyMembers % groupSize) !== 0){
      error.msg = "errorSizeNotMultiple";
      error.badValuesFields = ['groupSize'];
    }
    if((qtyMembers / groupSize) < 2){
      error.msg = "errorSizeNotEnoughMembers";
      error.badValuesFields = ['groupSize'];
    }
    if(groupSize < 2 || groupSize > 999){
      error.msg = "errorSizeNotAllowedSize";
      error.badValuesFields = ['groupSize'];
    }
    return error;
  }

  const valGroupAmount = (form, qtyMembers) => {
    let error = initialError;
    let groupsAmount = parseInt(form.groupsAmount);
    if((qtyMembers / groupsAmount) <= 1){
      error.msg = "errorSizeNotEnoughMembers";
      error.badValuesFields = ['groupsAmount'];
    }
    if(groupsAmount < 2 || groupsAmount > 999){
      error.msg = "errorSizeNotAllowedAmount";
      error.badValuesFields = ['groupsAmount'];
    }
    return error;
  }

  return {
    valGroupSize,
    valGroupAmount,
  }
}