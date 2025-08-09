//100Daysofcode
//Day-14

function minVisitors(visitors, k) {
  let min_sum = Infinity;

  for (let i = 0; i <= visitors.length - k; i++) {
    let current_sum = 0;
    for (let j = i; j < i + k; j++) {
      current_sum += visitors[j];
    }
    if (current_sum < min_sum) {
      min_sum = current_sum;
    }
  }

  return min_sum;
}
const visitors = [120, 80, 100, 90, 150, 110, 70];
const k = 3;
console.log(minVisitors(visitors, k)); //Expected Output: 270
