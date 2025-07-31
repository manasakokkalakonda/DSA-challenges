//100Days of code
//Day-5

//1.Problem 1: Separate Phone Numbers
//Expected output: 
const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];

const indianNumbers = phoneNumbers.filter(num => num.startsWith("+91"));
const usNumbers = phoneNumbers.filter(num => num.startsWith("+1") && !num.startsWith("+91"));
const separated = {
  indianNumbers,
  usNumbers
};
console.log(separated);


//Problem 2: Insert Product in Cart
//Expected output: // [101, 103, 102, 104]
let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1, 0, newProduct);
console.log(cart); 


//Problem 3: Insert Student in Waiting List
//Expected output: // ["Ali", "John", "Sara", "Aarav"]
let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList); 
