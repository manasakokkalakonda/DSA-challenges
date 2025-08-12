//100Daysofcode
//Day18

function longestSubarrayWithSumAtMostK(nums, k) {
    let start = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum > k) {
            currentSum -= nums[start];
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
const nums = [4, 2, 1, 7, 8, 1, 2, 8, 1];
const k = 8;
console.log(longestSubarrayWithSumAtMostK(nums, k)); //Expected Output: 3
