//100Daysofcode
//Day16

function countAnagrams(txt, pat) {
  const k = pat.length;
  let count = 0;

  function isAnagram(str1, str2) {
    const freq1 = {};
    const freq2 = {};

    for (let ch of str1) freq1[ch] = (freq1[ch] || 0) + 1;
    for (let ch of str2) freq2[ch] = (freq2[ch] || 0) + 1;
    for (let key in freq1) {
      if (freq1[key] !== freq2[key]) return false;
    }

    for (let key in freq2) {
      if (freq2[key] !== freq1[key]) return false;
    }
    return true;
  }
  for (let i = 0; i <= txt.length - k; i++) {
    const window = txt.substring(i, i + k);
    if (isAnagram(window, pat)) {
      count++;
    }
  }

  return count;
}
const txt = "forxxorfxdofr";
const pat = "for";
console.log(countAnagrams(txt, pat)); //Expected Output: 3
