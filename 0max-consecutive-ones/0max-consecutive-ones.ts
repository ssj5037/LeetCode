function findMaxConsecutiveOnes(nums: number[]): number {
    let maxNum = 0;
    let sum = 0;
    nums.forEach((item, index) => {
        if (item === 1) {
            sum++;
        }
        if (item === 0 || index === nums.length - 1) {
            maxNum = maxNum < sum ? sum : maxNum;
            sum = 0;
        }
    })
    return maxNum;
};