//100Days of code
//Day-6

//problem-1: Add Product to Cart
//Expected output:  [101, 102, 103, 104, 105]

let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart); 

//problem-2: Remove Sold Out Item 
//Expected output:  [101, 102, 104]
let books = [101, 102, 103, 104];
cart = cart.filter(id => id !== 103);
console.log(books); 


//problem-3 :Insert "banana" at index 
//Expected output:  ["apple", "orange", "banana", "grapes"]
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana");
console.log(fruits); 

//problem-4: Print All Students
//Expected output:
//Hello, Ali! 
// Hello, Zara! 
// Hello, John!
let students = ["Ali", "Zara", "John"];
students.forEach(name => console.log(`Hello, ${name}!`));


//problem-5: Delete First Item from Queue
//Expected output:  ["order2", "order3"]
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);
