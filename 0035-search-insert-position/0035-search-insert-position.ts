function searchInsert(nums: number[], target: number): number {
    let index = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            index = i;
            break;
        }
    }
    return index;
};