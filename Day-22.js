//100DAysofcode
//Day22

function shortestIndianFlagSegment(colors) {
    const requiredColors = new Set(["orange", "white", "green"]);
    let colorCount = {};
    let left = 0;
    let minLength = Infinity;

  const requiredColorsArray = Array.from(requiredColors);

    for (let right = 0; right < colors.length; right++) {
        const color = colors[right];

        if (requiredColors.has(color)) {
            colorCount[color] = (colorCount[color] || 0) + 1;
        }
        while (requiredColorsArray.every(c => colorCount[c] > 0)) {
            const currentLength = right - left + 1;
            minLength = Math.min(minLength, currentLength);

            const leftColor = colors[left];
            if (colorCount[leftColor] > 0) {
                colorCount[leftColor]--;
            }
            left++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
}
const requiredColors = ["blue", "orange", "white", "blue", "green", "orange"];
console.log(shortestIndianFlagSegment(requiredColors));  //Expected Output: 3
