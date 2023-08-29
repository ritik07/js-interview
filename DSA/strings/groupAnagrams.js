var groupAnagrams = function (strs) {
  let hashObj = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let key = word.split("").sort().join("");
    if (!hashObj[key]) {
      hashObj[key] = [];
    }
    hashObj[key].push(word);
  }

  return Object.values(hashObj);
};

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(input));

// TC: O(n * (k * log(k)))
// 	N is number of string	K is length of string
// SC: O(n)

const groupAnagram = (strs) => {
  let hashmap = {};

  for (i = 0; i < strs.length; i++) {
    let word = strs[i];
    let key = word.split("").sort().join("");
    if (!hashmap[key]) {
      hashmap[key] = [];
    }
    hashmap[key].push(word);
  }

  return Object.values(hashmap);
};

console.log(groupAnagram(input));
