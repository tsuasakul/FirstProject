//let inputNum: number = prompt("enter number plese : ")
//if (inputNum < 2){

//}

function isPrimeNumber(n: number){
  if (n < 2) {
    return false;
  }
  for (var num = 2; num < n; num++) {
    if (n % num === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(2));