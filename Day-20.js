//100Daysofcode
//Day-20

function minVisitorsInKHours(visitors, k) {
    if (!Array.isArray(visitors) || visitors.length < k || k <= 0) {
        return -1;
    }
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += visitors[i];
    }
    let minSum = windowSum;

    for (let i = k; i < visitors.length; i++) {
        windowSum += visitors[i] - visitors[i - k];
        minSum = Math.min(minSum, windowSum);
    }

    return minSum;
}
const visitors = [120, 80, 100, 90, 150, 110, 70];
const k = 3;
console.log(minVisitorsInKHours(visitors, k)); //Expected Output: 270
