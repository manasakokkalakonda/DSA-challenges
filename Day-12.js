//100Daysofcode
//Day-12

function maxVisitors(visits, k) {
  let maxSum = 0;
  for (let i = 0; i <= visits.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += visits[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
const visits = [10, 20, 30, 40, 50, 60, 70];
const k = 3;

console.log(maxVisitors(visits, k)); //Expected Output: 180
