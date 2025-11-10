/**
 * 给定一个未排序的整数数组 nums，找出数字连续的最长序列长度。
 * 例如：
 * 输入: [100, 4, 200, 1, 3, 2]
 * 输出: 4   // 因为最长连续序列是 [1,2,3,4]
 */

// 解法一：暴力枚举（时间复杂度 O(n²)，数组大时可能会慢）
function longestConsecutiveSimple(nums: number[]): number {
  // 用来记录最长连续序列长度
  let maxLen = 0;

  // 遍历数组中的每一个数字
  for (const num of nums) {
    let currentNum = num; // 当前数字，用于向前查找
    let currentLen = 1; // 当前连续序列长度，至少是 1（自己本身）

    // 向前查找比 currentNum 小的连续数字
    // 例如 currentNum = 3，判断 2、1 是否存在
    // nums.includes(x) 会返回 true 或 false
    while (nums.includes(currentNum - 1)) {
      currentNum--; // 移动到前一个数字
      currentLen++; // 序列长度 +1
    }

    // 更新最长长度
    maxLen = Math.max(maxLen, currentLen);
  }

  // 返回最终最长连续序列长度
  return maxLen;
}

// 测试
console.log(longestConsecutiveSimple([100, 4, 200, 1, 3, 2])); // 输出 4

// 解法二：使用 Set 优化
function longestConsecutive(nums: number[]): number {
  // 用 Set 存储所有数字，方便 O(1) 查询
  const numSet = new Set(nums);
  let maxLen = 0;

  // 遍历每个数字
  for (const num of numSet) {
    // 只从每个序列的起点开始计数
    // 起点条件：num - 1 不在 Set 中
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLen = 1;

      // 向后扩展序列
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLen++;
      }

      // 更新最大长度
      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
}

// 测试
const input = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(input)); // 输出 4
