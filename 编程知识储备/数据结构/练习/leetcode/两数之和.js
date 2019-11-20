var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let pre = nums[i], next = nums[j];
            if (pre + next == target) {
                return [pre, next];
            }
        }
    }
}

let nums = [2, 7, 11, 15], target = 9;
let result = twoSum(nums, target);
console.log(result)