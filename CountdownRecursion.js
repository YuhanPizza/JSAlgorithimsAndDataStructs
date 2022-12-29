// Only change code below this line
function countdown(n){
  if (n < 1){
    return [];
  }
  else{
    const i = countdown(n -1);
    i.unshift(n);
    return i;
  }
}
// Only change code above this line
console.log(countdown(10))