//100Daysofcode
//Day-9


//1. Remove Duplicate Emails (Sorted List Cleanup)
function removeDuplicateEmails(emails) {
  if (emails.length === 0) return [];
  const unique = [emails[0]];
  for (let i = 1; i < emails.length; i++) {
    if (emails[i] !== emails[i - 1]) {
      unique.push(emails[i]);
    }
  }
  return unique;
}

const emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"];
console.log(removeDuplicateEmails(emails));
//Expected Output: ["ali@gmail.com", "sara@gmail.com", "zayn@gmail.com"]


//2. Playlist Duration Matcher (Two-Sum Style)
function findPlaylistPair(songs, targetDuration) {
  songs.sort((a, b) => a - b);
  
  let left = 0, right = songs.length - 1;
  while (left < right) {
    const sum = songs[left] + songs[right];

    if (sum === targetDuration) {
      return [songs[left], songs[right]];
    } else if (sum < targetDuration) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
const songs = [3, 5, 8, 2, 7, 4];
const targetDuration = 10;
console.log(findPlaylistPair(songs, targetDuration));
//Expected Output: [3, 7] or [2, 8]
