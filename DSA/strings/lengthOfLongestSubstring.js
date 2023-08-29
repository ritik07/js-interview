var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charIndexMap[currentChar] !== undefined) {
      // Update the start index to the next position after the repeated character
      start = Math.max(start, charIndexMap[currentChar] + 1);
    }

    // Update the character's last seen index
    charIndexMap[currentChar] = end;

    // Calculate the current substring length and update maxLength
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

const s = "abcabcabb";
const result = lengthOfLongestSubstring(s);
console.log(result); // Output: 3

const longestSubString = (str) => {
  let start = 0;
  let charIndexMap = {};
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    let currentChar = str[end];

    if (charIndexMap[currentChar] !== undefined) {
      // update the value of start from +1
      start = Math.max(start, charIndexMap[currentChar] + 1);
    }

    // Update the character's last seen index
    charIndexMap[currentChar] = end;

    let currentLength = end - start + 1;
    maxLength = Math.max(currentLength, maxLength);
  }

  return maxLength;
};

console.log("first", longestSubString(s));
