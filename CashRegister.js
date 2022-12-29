function output(pay, cashObj, change, value, valueType){
   if(pay > value && cashObj[valueType]){
    if(pay >= cashObj[valueType]){
      let total = cashObj[valueType];
      pay -= total;
      change.push([valueType, total/ 100]);
      cashObj[valueType] -= total;
    }
    else{
      let total = Math.floor(pay / value) * value;
      pay -= total;
      change.push([valueType, total/ 100]);
      cashObj[valueType] -= total;
    }
  } 
  return [pay,cashObj,change];
}
  

function checkCashRegister(price, cash, cid) {
  let pay = Math.round((cash - price) * 100);
  let cashObj = cid.reduce((acc,[valueType,value]) =>{
    return {...acc,[valueType]:Math.round(value * 100)}
    },{});
  let change = [];
[pay,cashObj,change] = output(pay,cashObj,change,10000,'ONE HUNDRED');
[pay,cashObj,change] = output(pay,cashObj,change,2000,'TWENTY');
[pay,cashObj,change] = output(pay,cashObj,change,1000,'TEN');
[pay,cashObj,change] = output(pay,cashObj,change,500,'FIVE');
[pay,cashObj,change] = output(pay,cashObj,change,100,'ONE');
[pay,cashObj,change] = output(pay,cashObj,change,25,'QUARTER');
[pay,cashObj,change] = output(pay,cashObj,change,10,'DIME');
[pay,cashObj,change] = output(pay,cashObj,change,5,'NICKEL');
[pay,cashObj,change] = output(pay,cashObj,change,1,'PENNY');
// console.log(pay);
// console.log(cashObj);
// console.log(change);
if (pay > 0){
  return {status: "INSUFFICIENT_FUNDS", change: []}; 
}
let moneyLeft = Object.values(cashObj).reduce((acc,amt)=>acc+amt,0);
if(moneyLeft > 0){
  return {status: "OPEN", change: change};
}
  return {status: "CLOSED", change: cid};
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
