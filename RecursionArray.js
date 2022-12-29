function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum){
    return [endNum];
  }else{
    var i = rangeOfNumbers(startNum, endNum - 1);
    i.push(endNum);
    return i;
  }
};