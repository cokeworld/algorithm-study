function solution(nums) {
  const maxCount = nums.length / 2;
  const set = new Set(nums);
  
  return maxCount > set.size ? set.size : maxCount;
}