//100Days of code
 //Day-2
 
//1. Generate Invoice Report
/* Expected output:
 { name: 'Pen', total: 30 },
  { name: 'Notebook', total: 100 },
  { name: 'Bag', total: 400 }
]   
 */
let items = [ { name: "Pen", qty: 3, price: 10 }, 
    { name: "Notebook", qty: 2, price: 50 }, 
    { name: "Bag", qty: 1, price: 400 } ];
const invoiceReport = items.map(item => {
  return {
    name: item.name,
    total: item.qty * item.price
  };
});
console.log(invoiceReport);


// 3. Find Most Sold Product
//Expected output: pen
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
const frequencyMap = orders.reduce((acc, { product, qty }) => {
  acc[product] = (acc[product] || 0) + qty;
  return acc;
}, {});
// Find product with max qty
const mostSold = Object.keys(frequencyMap).reduce((maxProduct, product) =>
  frequencyMap[product] > frequencyMap[maxProduct] ? product : maxProduct
);
console.log(mostSold);


//4. Detect Duplicate Entries 
//Expected output: [ 'Ali', 'Sara' ]
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
const duplicates = users.filter((name, index, arr) =>
  arr.indexOf(name) !== index && arr.lastIndexOf(name) === index
);
console.log(duplicates);