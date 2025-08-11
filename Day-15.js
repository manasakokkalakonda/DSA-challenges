//100Daysofcode
//Day-15

function hasUniqueWindow(pages, k) {
  for (let i = 0; i <= pages.length - k; i++) {
    let window = pages.slice(i, i + k);
    let seen = new Set();

    for (let page of window) {
      if (seen.has(page)) {
        break; 
      }
      seen.add(page);
    }
    if (seen.size === k) {
      return true; 
    }
  }
  return false; 
}
const pages = ["home", "about", "products", "home", "cart", "checkout"];
const k = 3;
console.log(hasUniqueWindow(pages, k)); //Expected Output: true
