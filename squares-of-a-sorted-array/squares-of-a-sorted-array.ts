function sortedSquares(nums: number[]): number[] {
    nums = nums.map(item => item * item);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                const temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
            } 
        }
    }
    return nums;
};