/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                const temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
                console.log(nums)
            }
        }
    }
};