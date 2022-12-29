function telephoneCheck(str) {
  var regrex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regrex.test(str);
}

console.log(telephoneCheck("123**&!!asdf#"));
//^ beginning of the string.
//(1\s?)? allows for "1" or "1 " if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three digits  
// x|y checks for either x or y so (\(\d{3}\)|\d{3}
//   checks for either three digits surrounded by parentheses or three digits by themselves with no parentheses 
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ end of the string