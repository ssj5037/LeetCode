function maxProduct(nums: number[]): number {
    nums.sort((x, y) => y - x);
    console.log(nums);
    return (nums[0] - 1) * (nums[1] -1);
};