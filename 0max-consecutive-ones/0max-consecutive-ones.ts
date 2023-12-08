function findMaxConsecutiveOnes(nums: number[]): number {
    let maxNum = 0;
    let sum = 0;
    nums.forEach((item, index) => {
        if(item === 0) {
            maxNum = maxNum < sum ? sum : maxNum;
            sum = 0;
        } else {
            sum++;
        }
        if (index === nums.length - 1) {
            maxNum = maxNum < sum ? sum : maxNum;
        }
    })
    return maxNum;
};