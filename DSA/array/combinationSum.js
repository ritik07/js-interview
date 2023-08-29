var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (currentCombination, startIndex, currentSum) => {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (currentSum + candidates[i] > target) {
        // Prune branches where adding the current candidate exceeds target
        continue;
      }

      currentCombination.push(candidates[i]);
      backtrack(currentCombination, i, currentSum + candidates[i]);
      currentCombination.pop();
      console.log("me at last");
    }
  };

  backtrack([], 0, 0);
  return result;
};

const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result); // Output: [[2,2,3],[7]]

const getAllCombination = (candidate, target) => {
  const result = [];

  const backtrackFn = (currentCombinationSum, startIndex, currentSum) => {
    if (currentSum === target) {
      result = [...currentCombinationSum];
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (currentSum > target) {
        // then skip the further check
        continue;
      }

      currentCombinationSum.push(candidates[i]);
      backtrackFn(currentCombinationSum, i, currentSum + candidate[i]);
      // once one execution is completed then check for another so change the combination
      currentCombinationSum.pop();
    }
  };

  backtrackFn([], 0, 0);
  return result;
};

// for (let i = startIndex; i < candidates.length; i++) {
//   // ... code before the backtrack call ...

//   backtrack(currentCombination, i, currentSum + candidates[i]);

//   // Code written here will be executed after the recursive exploration
//   // is complete for the current candidate.

//   currentCombination.pop(); // This line is executed after the recursive call returns.
// }
