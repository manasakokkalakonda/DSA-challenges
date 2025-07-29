 //100Days of code
 //Day-1
 
 //1.Remove Discontinued Products
//output: [ 'Laptop', 'Mobile', 'Watch' ]
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2,2);
console.log(products);

//2. Add New Students in Between
//output: [ 'Ali', 'Sara', 'Nina', 'omar', 'Zoya' ]
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(2,0,'Nina','omar');
console.log(students);

//3. Extract Top Performers
//Expected output: [ 'Zainab', 'Ali', 'Farhan' ]
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topPerformers=scores.slice(0,3);
console.log(topPerformers);

// 4. Show Last 2 Days’ Sales
//Expected output: [ 390, 310 ]

let sales = [220, 300, 280, 150, 400, 390, 310];
let lastTwo=sales.slice(-2);
console.log(lastTwo);

//5. Get All Users Who Are Active
//Expected output: [ { name: 'Ahmed', active: true }, { name: 'John', active: true } ]
let users = [ {name: 'Ahmed', active: true},
     {name: 'Mira', active: false}, 
     {name: 'John', active: true}, ];
 let activeUsers = users.filter(user => user.active);
console.log(activeUsers); 

// 6. Block Short Phone Numbers
//Expected output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validNumbers = phoneNumbers.filter(num => num.length === 10);
console.log(validNumbers); 

//7. Convert Price to With Tax
 //Expected output:  [118, 236, 354]
let prices = [100, 200, 300];
let taxes = prices.map(price => price * 1.18);
console.log(taxes);

 
 //8. Append “.com” to Website Names
//Expected output:  ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + '.com');
console.log(domains); 

// 9. Calculate Total Cart Price
//Expected output:  2896
let cart = [499, 1299, 299, 799];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log(total); 

// 10. Count Frequency of Votes
//Expected output: { A: 3, B: 2, C: 1 }
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount = votes.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log(voteCount); 

