//100Days of code
//Day-3

//1. Detect and Merge Duplicate Product Entries (Advanced Cleanup)
function cleanupInventory(inventory) {
  let seen = new Set();
  return inventory.filter(item => {
    let name = item.name.toLowerCase();
    if (seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}

let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
console.log(cleanupInventory(inventory));
/*Expected output: [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 104, name: 'Tablet' },
  { id: 106, name: 'Camera' }
]  */

//2. Group Transactions by Category and Sum Amounts
function groupByCategory(transactions) {
  return transactions.reduce((acc, { category, amount }) => {
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});
}
let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
console.log(groupByCategory(transactions));
//Expected Output: { Food: 200, Transport: 120, Shopping: 300 }
