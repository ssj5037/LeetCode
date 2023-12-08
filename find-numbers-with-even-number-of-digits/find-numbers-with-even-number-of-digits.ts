function findNumbers(nums: number[]): number {
    let sum = 0;
    nums.forEach(item => {
        if (item.toString().length % 2 === 0) sum++;
    })
    return sum;
};