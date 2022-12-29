function checkObj(obj, checkProp) {
  // Only change code below this line
  let value ="Not Found";
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  return value;
  // Only change code above this line
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");