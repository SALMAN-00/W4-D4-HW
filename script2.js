function processForm(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstNameinput").value;
  let lastName = document.getElementById("lastNameinput").value;
  let ID = document.getElementById("IDinput").value;
  checkUserInput(firstName, lastName, ID);
}

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let ID = prompt("Enter your ID");

function checkUserInput(firstName, lastName, ID) {
  if (firstName === "") {
    alert("The first name must be filled in");
    console.log("The first name must be filled in");
  } else if (firstName.length < 3) {
    alert(`${firstName} is not valid first name`);
    console.log(`${firstName} is not valid first name`);
  }
  if (lastName === "") {
    alert(`The last name must be filled in`);
    console.log(`The last name must be filled in`);
  } else if (lastName.length < 3) {
    alert(`${lastName} is not valid last name`);
    console.log(`${lastName} is not valid last name`);
  }
  if (ID === "") {
    alert(`ID must be filled in`);
    console.log(`must be filled in`);
  } else if (!parseInt(ID)) {
    alert(`${ID} is not a valid ID`);
    console.log(`${ID} is not a valid ID`);
  } else {
    alert(`welcom ${firstName} ${lastName} this your ID: ${ID}`);
    console.log(`welcom ${firstName} ${lastName} this your ID: ${ID}`);
  }
}

checkUserInput(firstName, lastName, ID);
