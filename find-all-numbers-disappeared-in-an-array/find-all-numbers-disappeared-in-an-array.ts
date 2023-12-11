function findDisappearedNumbers(nums: number[]): number[] {
    let numsSet = new Set(nums);
    let result:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (!numsSet.has(i + 1)) result.push(i+1);
    }
    return result;
};