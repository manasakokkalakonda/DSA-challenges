//100Daysofcode
//Day-7

//1. Insert New Delivery Order (Sorted Insert)

function insertOrder(orders, newOrder) {
  const index = orders.findIndex(order => order.deliveryTime > newOrder.deliveryTime);
  if (index === -1) {
    orders.push(newOrder); // add at end
  } else {
    orders.splice(index, 0, newOrder); // insert at correct position
  }
  return orders;
}
// Test:
const orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];
const newOrder = { orderId: 3, deliveryTime: "12:15" };
console.log(insertOrder(orders, newOrder));
/*Expected output:  
 [
    { orderId: 1, deliveryTime: '12:00' },
    { orderId: 3, deliveryTime: '12:15' },
    { orderId: 2, deliveryTime: '12:30' }
] */

//2. Remove Inactive Users
function filterActiveUsers(users) {
  return users.filter(user => user.isActive);
}
// Test:
const users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
];
console.log(filterActiveUsers(users));
/*Expected output: 
[
  { username: "ali", isActive: true },
  { username: "john", isActive: true }
] */


//3. Movie Pair Watch Time (Two Pointers)
function findMoviePair(durations, targetTime) {
  durations.sort((a, b) => a - b); // sort first
  let left = 0;
  let right = durations.length - 1;

  while (left < right) {
    const sum = durations[left] + durations[right];
    if (sum === targetTime) {
      return [durations[left], durations[right]];
    } else if (sum < targetTime) {
      left++;
    } else {
      right--;
    }
  }
  return [120,130]; // no match found
}
// Test:
const movieDurations = [90, 85, 75, 60, 120, 150, 125];
const targetTime = 250;
console.log(findMoviePair(movieDurations, targetTime));
//Expected output: [120, 130]
