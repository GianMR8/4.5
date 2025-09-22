// Concatenating strings
let firstName = "Eric";
let lastName = "Heller";
let age = 17;
let fullName = firstName + " " + lastName;
console.log(fullName); //Output: Stan Lee
    
// Concatenating strings and a number
let userInfo = "Name: " + fullName + ", Age: " + age;
console.log(userInfo); // Output: Name: Stan Lee, Age: 17

let month = "November";
let text = "It's Thanksgiving";
let date = "";

switch (new Date().getMonth()) {
  case 0:
    date = "January";
    break;
  case 1:
    date = "February";
    break;
  case 2:
    date = "March";
    break;
  case 3:
    date = "April";
    break;
  case 4:
    date = "May";
    break;
  case 5:
    date = "June";
    break;
  case 6:
    date = "July";
    break;
  case 7:
    date = "August";
    break;
  case 8:
    date = "September";
    break;
  case 9:
    date = "October";
    break;
  case 10:
    date = "November";
    break;
  case 11:
    date = "December";
    break;
}
console.log (date);
if (date == "September") {
    console.log("It's Fall!");
}

let x = 500;
x.toString();
(500).toString();
(250 + 250).toString();

// {} is an object