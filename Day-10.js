//100Daysofcode
//Day-10

//Two Pointers Real-World Edition (Medium)
function mergeCalendars(userA, userB) {
  const allSlots = [...userA, ...userB].sort((a, b) => a[0] - b[0]);
  const merged = [allSlots[0]];

  for (let i = 1; i < allSlots.length; i++) {
    const [currStart, currEnd] = allSlots[i];
    const lastMerged = merged[merged.length - 1];

    if (currStart <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], currEnd);
    } else {
      merged.push([currStart, currEnd]);
    }
  }
  return merged;
}
const userA = [[9, 11], [13, 15], [18, 20]];
const userB = [[10, 12], [14, 16], [17, 18]];
console.log(mergeCalendars(userA, userB));
//Expected Output: [[9, 12], [13, 16], [17, 20]]

