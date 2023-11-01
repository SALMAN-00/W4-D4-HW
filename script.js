let x = prompt("Enter First Number");
let y = prompt("Enter Second Number");
let operation = prompt("Enter Sign Operation");

function notNull(x, y, operation) {
  if (
    x !== null &&
    y !== null &&
    x !== "" &&
    y !== "" &&
    operation !== null &&
    operation !== "" &&
    !isNaN(x) &&
    !isNaN(y)
  ) {
    return;
  } else {
    alert("you not Enter First Number or Second Number or Operation");
  }
}
notNull(x, y, operation);
switch (operation) {
  case "+":
    alert(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
    break;
  case "-":
    alert(`${x} - ${y} = ${parseInt(x) - parseInt(y)}`);
    console.log(`${x} - ${y} = ${parseInt(x) - parseInt(y)}`);
    break;
  case "*":
    alert(`${x} *  ${y} = ${parseInt(x) * parseInt(y)}`);
    console.log(`${x} *  ${y} = ${parseInt(x) * parseInt(y)}`);
    break;
  case "/":
    if (parseInt(y) !== 0) {
      alert(`${x} / ${y} = ${parseInt(x) / parseInt(y)}`);
      console.log(`${x} / ${y} = ${parseInt(x) / parseInt(y)}`);
    } else {
      alert("can't divide zero");
      console.log("can't divide zero");
    }

    break;
  default:
    alert("The operation does not exist");
    console.log("The operation does not exist");
}

/*let x = prompt("Enter Your Name");
if (x != null) {
  alert( "Hi " + x);
}
*/

/*                  Anuthor way
let x = 5;
let y = 5;
let operation = "+";

switch (operation) {
  case "+":
    console.log(`${x} + ${y} = ${x + y}`);
    break;
  case "-":
    console.log(`${x} - ${y} = ${x - y}`);
  case "*":
    console.log(`${x} * ${y} = ${x * y}`);
    break;
  case "/":
    console.log(`${x} / ${y} = ${x / y}`);
    break;
  default:
    console.log("The operation does not exist");
}
*/

/*          Anuthor way
if(operation == "+" || operation == "sum"){
    alert(`${x} + ${y} = ${x+y}`)
console.log(`${x} + ${y} = ${x+y}`)
}
else if(operation == "-" || operation =="minus"){
    alert(`${x} - ${y} = ${x-y}`)
    console.log(`${x} - ${y} = ${x-y}`)  
}

else if(operation == "*" || operation == "multiplay"){
    alert(`${x} * ${y} = ${x*y}`)
    console.log(`${x} * ${y} = ${x*y}`) 

}
else if(operation == "/" || operation == "devided"){
    alert(`${x} / ${y} = ${x/y}`)
    console.log(`${x} / ${y} = ${x/y}`)  
}
else{
alert("The operation does not exist")
    console.log("The operation does not exist")
}
*/
