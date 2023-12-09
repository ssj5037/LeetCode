function removeElement(nums: number[], val: number): number {
    const filters = nums.filter(item => item !== val);
    for(let i = 0; i < filters.length; i++) {
        nums[i] = filters[i];
    }
    return filters.length;
};