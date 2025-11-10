/**
 * 题目：给定一个整数数组 nums 和一个目标值 target，
 * 找出数组中和为目标值的两个数的下标。
 *
 * 示例：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]  // 因为 nums[0] + nums[1] = 2 + 7 = 9
 */
console.log(twoSum([2, 7, 11, 15], 9)); // 输出 [0,1]

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
