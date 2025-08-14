//100Daysofcode
//Day21

function longestProductiveStreak(days, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;
  for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (days[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
const days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
const k = 2;
console.log("Longest Productive Streak:", longestProductiveStreak(days, k));
//Expected output: 7

