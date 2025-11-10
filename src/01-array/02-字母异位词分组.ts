/**
 * 给定一个字符串数组，将字母异位词组合在一起。
 * 字母异位词：字母相同，但顺序不同的字符串。
 *
 * 示例：
 * 输入: ["eat","tea","tan","ate","nat","bat"]
 * 输出: [["eat","tea","ate"],["tan","nat"],["bat"]]
 */

function groupAnagrams(strs: string[]): string[][] {
  // 用 Map 存储 "排序后的字符串" -> 对应的异位词列表
  const map = new Map<string, string[]>();

  for (const str of strs) {
    // 将字符串的字母排序，得到 key，如果 str 是 "eat"，key 就是 "aet"
    const key = str.split("").sort().join("");

    // 如果 map 中已有 key，则把当前字符串 push 进去
    if (map.has(key)) {
      map.get(key)!.push(str);
    } else {
      // 否则新建一个数组
      map.set(key, [str]);
    }
  }

  // 返回所有 map 中的值
  return Array.from(map.values());
}

// 测试
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
// 输出: [["eat","tea","ate"],["tan","nat"],["bat"]]
