function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let excepts: number[] = [];
    for (let n in nums) {
        let index = excepts.indexOf(nums[n]);
        if (index > -1) excepts.splice(index, 1);
        else excepts.push(nums[n]);
    }
    return excepts[0];
};