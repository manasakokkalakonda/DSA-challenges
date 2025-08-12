//100Daysofcode
//Day19

function hasUniqueWindow(pages, k) {
    if (k > pages.length) {
        return false;
    }
    let windowSet = new Set();
    for (let i = 0; i < pages.length; i++) {
        if (i >= k) {
            windowSet.delete(pages[i - k]);
        }
         windowSet.add(pages[i]);
 if (windowSet.size === k) {
            return true;
        }
    }
 return false;
}
const pages = ["home", "about", "products", "home", "cart", "checkout"];
const k = 3;
console.log(hasUniqueWindow(pages, k));  //Expected Output: true
