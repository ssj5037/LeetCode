function removeDuplicates(nums: number[]): number {
    let duplNums: number[] = [];
    let duplCount: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!duplNums.includes(nums[i])) {
            duplNums.push(nums[i]);
            nums[duplCount] = nums[i];
            duplCount++;
        }
    }
    return duplCount;
};