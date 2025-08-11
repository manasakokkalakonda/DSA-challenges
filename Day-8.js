//100Daysofcode
//Day8

// 1. Count Pairs with Given Sum
function countPairsWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      count++;
      left++;
      right--; // move both pointers to avoid duplicates
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}
console.log(countPairsWithSum([1, 2, 3, 4, 5, 6, 7], 8)); //Expected Output: 3


//2. Move Zeroes to End
function moveZeroes(arr) {
  let insertPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }
  return arr;
}
console.log(moveZeroes([0, 1, 0, 3, 12])); //expected Output: [1, 3, 12, 0, 0]


