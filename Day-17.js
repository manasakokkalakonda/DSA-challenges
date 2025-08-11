//100Daysofcode
//Day17

function maxLengthSubarray(nums, k) {
  let maxLen = 0;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum <= k) {
        maxLen = Math.max(maxLen, end - start + 1);
      } else {
        break; 
      }
    }
  }
  return maxLen;
}

const nums = [2, 1, 5, 1, 3, 2];
const k = 8;
console.log(maxLengthSubarray(nums, k)); //Expected Output: 3
