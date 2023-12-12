function maxProduct(nums: number[]): number {
    nums.sort((x, y) => {
        if (x > y) return -1;
        else if (x < y) return 1;
        return 0;
    })
    console.log(nums);
    return (nums[0] - 1) * (nums[1] -1);
};