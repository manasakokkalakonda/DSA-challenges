//100Daysofcode
//Day23

function minWindow(deliveries, required) {
    const need = new Set(required);
    const countMap = new Map();
    let left = 0;
    let minLen = Infinity;
    let formed = 0;

    for (let right = 0; right < deliveries.length; right++) {
        const item = deliveries[right];
        countMap.set(item, (countMap.get(item) || 0) + 1);

        if (need.has(item) && countMap.get(item) === 1) {
            formed++;
        }
        while (formed === need.size) {
            minLen = Math.min(minLen, right - left + 1);

            const leftItem = deliveries[left];
            countMap.set(leftItem, countMap.get(leftItem) - 1);

            if (need.has(leftItem) && countMap.get(leftItem) === 0) {
                formed--;
            }
            left++;
        }
    }
    return minLen === Infinity ? -1 : minLen;
}
const deliveries = ["tomato", "onion", "tomato", "cheese", "onion"];
const required = ["tomato", "cheese", "onion"];
console.log(minWindow(deliveries, required)); //Expected Output: 3
