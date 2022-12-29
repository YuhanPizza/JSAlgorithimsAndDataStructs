function rot13(str)  {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, function(str) {
    const charCode = str.charCodeAt();
    //A = 65                                  Z = 90 should not exceed
    return String.fromCharCode(((charCode + 13) <= 90) ? charCode + 13
                                    : (charCode + 13) % 90 + 64); //places it in its proper char value
});  
}
console.log(rot13("SERR PBQR PNZC"));